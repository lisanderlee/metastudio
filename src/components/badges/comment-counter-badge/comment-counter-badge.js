import './comment-counter-badge'
import { Badge } from "reactstrap";

  
export default function CommentCounterBadge({commentCount}) {
    return (
    <>
           <Badge className="badge-white " pill >
            <i class="fa fa-comment" aria-hidden="true"></i>
            <span className='spacer'></span> {commentCount}
            </Badge>
        
    </>
    )
}
