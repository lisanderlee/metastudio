import {useState} from "react";
import ShareReviewModal from "../modals/share-review-modal";
import SharePresentationModal from "../modals/share-presentation-modal";
import ShareIframeModal from "../modals/share-iframe-modal";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

export default function ShareDropdown() {
  const [openShareReviewModal, setOpenShareReviewModal] = useState(false)
  const [openSharePresentationToModal, setOpenSharePresentationModal] = useState(false)
  const [openShareIframeToModal, setOpenShareIframeModal] = useState(false)

    return (
    <>
    <UncontrolledDropdown group >
      <DropdownToggle caret className="btn-sm ml-3 " color="primary">
          Share
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem href="#pablo" onClick={() => setOpenShareReviewModal(true)}>
        <i class="fa fa-comment" aria-hidden="true"></i>Share for Review
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={() => setOpenSharePresentationModal(true)}>
       <i class="fa fa-desktop" aria-hidden="true"></i>Share as Presentation
      </DropdownItem>
      <DropdownItem href="#pablo" onClick={() => setOpenShareIframeModal(true)}>
       <i class="fa fa-code" aria-hidden="true"></i>Create IFrame
      </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    {openShareReviewModal && <ShareReviewModal isModalOpen={setOpenShareReviewModal} />}
    {openSharePresentationToModal && <SharePresentationModal isModalOpen={setOpenSharePresentationModal} />}
    {openShareIframeToModal && <ShareIframeModal isModalOpen={setOpenShareIframeModal} />}

    </>
    )
  }
