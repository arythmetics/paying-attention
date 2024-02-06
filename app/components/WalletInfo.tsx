import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

function WalletInfo (): React.ReactElement {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const { status } = await BarCodeScanner.requestPermissionsAsync()
        setHasPermission(status === 'granted')
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }): void => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  const renderCamera = (): React.ReactElement => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    )
  }

  if (hasPermission === null) {
    return <View />
  }

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Camera permission not granted</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Barcode Scanner App!</Text>
      <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
      {renderCamera()}
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setScanned(false) }}
        disabled={scanned}
      >
        <Text style={styles.buttonText}>Scan QR to Start your job</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40
  },
  cameraContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 40
  },
  camera: {
    flex: 1
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default WalletInfo
