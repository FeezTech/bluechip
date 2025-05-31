import Image from "next/image"
import '../styles/topdocumentpage.css'

function TopDocumentPage(props) {
  return (
    <section className="topDocumentContainer">
        <div className="document-details">
            <div className="document-image">
                <Image
                    src={props.TopDocumentImage ||"/images/document/folder 1.png"}
                    alt={props.TopDocumentAlt || "document icon"}
                    width={props.TopDocumentWidht || 80}
                    height={props.TopDocumentHeight || 62}
                />
            </div>
            <div className="document-name">
                <span>{props.TopDocumentName || "CRUD Invoices"}</span>
            </div>
            <div className="files-number">
                <p>{props.TopDocumentNumber|| "7 Files"}</p>
            </div>
        </div>
    </section>
  )
}

export default TopDocumentPage