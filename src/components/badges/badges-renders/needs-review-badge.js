import {
    Badge
  } from "reactstrap";
  
export default function NeedsReviewBadge() {
    return (
    <>
    <Badge className="text-white text-capitalize font-weight-normal"  color="warning" pill>
        Needs Review
    </Badge>
    </>
    )
}
