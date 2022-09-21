import {
    Badge
  } from "reactstrap";
  
export default function NoStatusBadge() {
    return (
    <>
    <Badge className="text-white text-capitalize"   color="transparent" pill>
        No Status
    </Badge>
    </>
    )
}
