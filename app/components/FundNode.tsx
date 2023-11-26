import { useContext } from "react";
import { BreezNodeContext } from "./Breez";

export default function FundNode() {
    const nodeState = useContext(BreezNodeContext);
    const nodeBalance = nodeState?.channelsBalanceMsat
    return <div>
        {nodeBalance}
    </div>
}