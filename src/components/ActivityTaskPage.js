import Image from 'next/image';
import '../styles/activitypage.css';

function ActivityTaskPage(props) {
  return (
    <>
        <section className="activity-container">
            <div className="created-tasks">
                {props.taskCreatedRoutes && props.taskCreatedRoutes.map((taskCreatedRoute, routeIndex) => (
                    <div className="task-route" key={routeIndex}>
                        <div className="route-head">
                        <Image
                            src={taskCreatedRoute.taskCreatedRouteIcon || "/images/activity/Icon (17).png"}
                            alt={taskCreatedRoute.taskCreatedRouteAlt || "icon image"}
                            width={taskCreatedRoute.taskCreatedRouteWidth || 36}
                            height={taskCreatedRoute.taskCreatedRouteHeight || 36}
                        />
                        </div>

                        {taskCreatedRoute.taskCreatedLineIcon && (
                        <div className="route-line">
                            <Image
                            src={taskCreatedRoute.taskCreatedLineIcon}
                            alt={taskCreatedRoute.taskCreatedLineAlt || "line image"}
                            width={taskCreatedRoute.taskCreatedLineWidth || 2}
                            height={taskCreatedRoute.taskCreatedLineHeight || 173}
                            />
                        </div>
                        )}
                    </div>
                ))}
                <div className="tasks-container">
                    {props.taskCreatedInfo && props.taskCreatedInfo.map ((taskCreated, infoIndex) => (
                        <div className="task-created-info" key={infoIndex}>
                            <span>{taskCreated.taskDescription || "Created 2 new tasks in “Development” section"}</span>
                            <p>{taskCreated.taskDate || "4:23 PM by"} <strong>{taskCreated.taskPower || "You"}</strong></p>
                        </div>

                    ))}

                    {props.middleImages && (
                        <div className="post-image">
                            {props.middleImages.map((middleImage, index) => (
                            <div className="middleImageContainer" key={index}>
                                <div className="middleImage">
                                    <Image
                                        src={middleImage.imageSrc}
                                        alt={middleImage.imageAlt || "post content"}
                                        width={middleImage.imageWidth || 500}
                                        height={middleImage.imageHeight || 300}
                                        style={{ borderRadius: "8px" }}
                                    />
                                </div>
                                <div className="image-info">
                                    <span>
                                        {props.middleImageInfo?.[index]?.imageInfo}
                                    </span>
                                    <p>
                                        {props.middleImageSize?.[index]?.imageSize}
                                    </p>
                                </div>
                            </div>
                            ))}
                        </div>
                    )}

                    {props.withdrawalContainers && props.withdrawalContainers.map((withdrawalContanier, withdrawalIndex) => (
                        <div className="withdrawContainer" key={withdrawalIndex}>
                            <div className="bank-container">
                                <div className="bank-icon">
                                    <Image
                                        src={withdrawalContanier.bankImage}
                                        alt={withdrawalContanier.bankImageAlt || "post content"}
                                        width={withdrawalContanier.bankImageWidth || 500}
                                        height={withdrawalContanier.bankImageHeight || 300}
                                        style={{ borderRadius: "8px" }}
                                    />
                                </div>
                                <div className="bank-withdraw">
                                    <span>{withdrawalContanier.withdrawFund || "Withdraw Your Funds to Bank"}</span>
                                    <p>{withdrawalContanier.withdrawStatement || "Withdraw money to your bank account. Commision is $25 per transaction under $50,000"}</p>
                                </div>
                            </div>
                            <button className='withdraw-button'>
                                {withdrawalContanier.withdrawButton || "Withdraw Money"}
                            </button>
                        </div>
                    ))}

                    {props.taskTypes && props.taskTypes.map((taskType, taskIndex) => (
                        <div className="task-type" key={taskIndex}>
                            <div className="task-header">
                                <span>{taskType.taskTypeHeader || "Meeting with customer"}</span>
                            </div>

                            <div className="task-container">
                                <div className="task">
                                    <span>{taskType.taskTypeName || "UI Design"}</span>
                                </div>

                                {taskType.customers && (
                                    <div className="customers">
                                    {taskType.customers.map((customer, customerIndex) => (
                                        <div className="customer" key={customerIndex} style={{ zIndex: customerIndex }}>
                                            <Image
                                                src={customer.customerImage || "/images/activity/150-9 3 (1).png"}
                                                alt={customer.customerAlt || "customer-1 image"}
                                                width={customer.customerWidth || 26}
                                                height={customer.customerHeight || 26}
                                            />
                                        </div>
                                    ))}
                                    </div>
                                )}

                                <div className="task-status">
                                    <span>{taskType.taskTypeStatus || "In Progress"}</span>
                                </div>

                                <div className="task-viewer">
                                    <span>{taskType.taskTypeViewer || "View"}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
    
  )
}

export default ActivityTaskPage