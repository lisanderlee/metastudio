import {
    Badge
  } from "reactstrap";
  
export default function InProgressBadge() {
    return (
    <>
    <Badge className="text-white text-capitalize font-weight-normal"  color="info" pill>
        In Progress
    </Badge>
    </>
    )
}
