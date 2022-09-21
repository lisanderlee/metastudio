import {
    Badge
  } from "reactstrap";
  
export default function ApprovedBadge() {
    return (
    <>
        <Badge className="text-white text-capitalize font-weight-normal" color="success" pill>
            Approved
        </Badge>
    </>
    )
}
