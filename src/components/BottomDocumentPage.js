import Image from "next/image"
import '../styles/bottomdocumentpage.css'

function BottomDocumentPage(props) {
  return (
    <section className="BottomDocumentContainer">
            <div className="document-details">
                <div className="document-image">
                    <Image
                        src={props.BottomDocumentImage || "/images/document/pdf.png"}
                        alt={props.BottomDocumentAlt || "document icon"}
                        width={props.BottomDocumentWidht || 62}
                        height={props.BottomDocumentHeight || 62}
                    />
                </div>
                <div className="document-name">
                    <span>{props.BottomDocumentName || "Avionica Tech Req.."}</span>
                </div>
                <div className="date-posted">
                    <p>{props.BottomDocumentPosted || "2 days ago"}</p>
                </div>
            </div>
    </section>
  )
}

export default BottomDocumentPage