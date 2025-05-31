'use client';
import Image from "next/image";
import '../styles/projectpage.css';


function ProjectPage(props) {
    const status = (props.projectStatus || "").toLowerCase(); // normalize the status

    // Define mappings for background and text color classes
    const statusClassMap = {
        todo: {
        bg: "follow-grey",
        text: "follow-text-grey"
        },
        "in progress": {
        bg: "follow-blue",
        text: "follow-text-blue"
        },
        completed: {
        bg: "follow-green",
        text: "follow-text-green"
        },
        overdue: {
        bg: "follow-red",
        text: "follow-text-red"
        }
    };

    const selectedClass = statusClassMap[status] || statusClassMap["todo"];
    const statusButtonClass = `project-status ${selectedClass.bg}`;
    const statusTextClass = selectedClass.text;

  return (
        <>
            <section className="project-collaborator-container">
                <div className="project-collaborator-header">
                    <div className="header-image">
                        <Image
                            src={props.projectImage || "/images/feed/fox-hub-2.png"}
                            alt={props.projectAlt || "fox hub image"}
                            width={props.projectWidth || 46}
                            height={props.projectHeight || 46}
                        />
                    </div>
                    <div className={statusButtonClass}>
                        <span className={statusTextClass}>{props.projectStatus || "In Progress"}</span>
                    </div>
                </div>
                <div className="project-collaborator-details">
                    <span>{props.projectName || "Mivy App"}</span>
                    <p>{props.projectDescription || "CRM App Application to HR efficiency"}</p>
                </div>
                <div className="project-date-budget">
                    <div className="due-date">
                        <span>{props.projectDueDate || "Feb 6, 2021"}</span>
                        <p>Due Date</p>
                    </div>
                    <div className="budget">
                        <span>{props.projectBudget || "$284,900.00"}</span>
                        <p>Budget</p>
                    </div>
                </div>
                {props.collaborators && (
                    <div className="collaborators-overlap">
                        {props.collaborators.map((collaborator, index) => (
                            <div className="project-collaborator" key={index} style={{ zIndex: index }}>
                                <Image
                                src={collaborator.projectCollaboratorImage || "/images/feed/150-9 3.png"}
                                alt={collaborator.projectCollaboratorAlt || "collaborator image"}
                                width={collaborator.projectCollaboratorWidth || 36}
                                height={collaborator.projectCollaboratorHeight || 36}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
  )
}

export default ProjectPage