import '../styles/documentpage.css'
import BottomDocumentPage from "./BottomDocumentPage"
import TopDocumentPage from "./TopDocumentPage"

function DocumentPage() {
  return (
    <section className="documentPage-contaner">
        <div className="topdocumentpage-container">
            <TopDocumentPage/>
            <TopDocumentPage
                TopDocumentImage="/images/document/folder 1.png"
                TopDocumentAlt="folder icon"
                TopDocumentWidht={80}
                TopDocumentHeight={62}
                TopDocumentName="Tower Hill Docs"
                TopDocumentNumber="3 Files"
            />
            <TopDocumentPage
                TopDocumentImage="/images/document/folder 1.png"
                TopDocumentAlt="folder icon"
                TopDocumentWidht={80}
                TopDocumentHeight={62}
                TopDocumentName="Mivy App"
                TopDocumentNumber="25 Files"
            />
        </div>
        <div className="bottomdocumentpage-container">
            <BottomDocumentPage/>
            <BottomDocumentPage
                BottomDocumentImage="/images/document/doc.png"
                BottomDocumentAlt="Doc Document"
                BottomDocumentWidht={62}
                BottomDocumentHeight={62}
                BottomDocumentName="9 Degree CRUD Req..."
                BottomDocumentPosted="2 days ago"
            />
            <BottomDocumentPage
                BottomDocumentImage="/images/document/css.png"
                BottomDocumentAlt="CSS Document"
                BottomDocumentWidht={62}
                BottomDocumentHeight={62}
                BottomDocumentName="User CRUD Styles"
                BottomDocumentPosted="2 days ago"
            />
            <BottomDocumentPage
                BottomDocumentImage="/images/document/ai.png"
                BottomDocumentAlt="AI Document"
                BottomDocumentWidht={62}
                BottomDocumentHeight={62}
                BottomDocumentName="Craft Logo"
                BottomDocumentPosted="2 days ago"
            />
            <BottomDocumentPage
                BottomDocumentImage="/images/document/sql.png"
                BottomDocumentAlt="SQL Document"
                BottomDocumentWidht={62}
                BottomDocumentHeight={62}
                BottomDocumentName="Orders Backup"
                BottomDocumentPosted="2 days ago"
            />
            <BottomDocumentPage
                BottomDocumentImage="/images/document/xml.png"
                BottomDocumentAlt="XML Document"
                BottomDocumentWidht={62}
                BottomDocumentHeight={62}
                BottomDocumentName="Leaf CRM API Co.."
                BottomDocumentPosted="2 days ago"
            />
            <BottomDocumentPage
                BottomDocumentImage="/images/document/tif.png"
                BottomDocumentAlt="TIF Document"
                BottomDocumentWidht={62}
                BottomDocumentHeight={62}
                BottomDocumentName="Tower Hill billboard.."
                BottomDocumentPosted="2 days ago"
            />
        </div>
    </section>
  )
}

export default DocumentPage