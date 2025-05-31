import '../styles/activitypage.css';
import ActivityCreatedPage from './ActivityCreatedPage';
import ActivityTaskPage from './ActivityTaskPage';

function ActivityPage() {
  return (
    <section className="main-activity-container">
        <ActivityCreatedPage/>
        <ActivityTaskPage
        taskCreatedRoutes={[
          {
            taskCreatedRouteIcon: "/images/activity/Icon (17).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (1).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 173,
          }
        ]}
        taskCreatedInfo={[
          {
            taskDescription: "Created 2 new tasks in “Development” section",
            taskDate: "4:23 PM by",
            taskPower: "You",
          }
        ]}

        taskTypes={[
          {
            taskTypeHeader: "Meeting with customer",
            taskTypeName: "UI Design",
            taskTypeStatus: "In Progress",
            taskTypeViewer: "View",
            customers: [
              {
                customerImage: "/images/activity/150-9 3 (1).png",
                customerAlt: "Customer 1",
                customerWidth: 26,
                customerHeight: 26,
              },
              {
                customerImage: "/images/activity/150-23 3 (1).png",
                customerAlt: "Customer 2",
                customerWidth: 26,
                customerHeight: 26,
              },
              {
                customerImage: "/images/activity/Item (5).png",
                customerAlt: "Customer 3",
                customerWidth: 26,
                customerHeight: 26,
              },
            ],
          },
          {
            taskTypeHeader: "Client Review",
            taskTypeName: "Prototype Testing",
            taskTypeStatus: "Completed",
            taskTypeViewer: "View",
            customers: [
              {
                customerImage: "/images/activity/Item (7).png",
                customerAlt: "Customer 4",
                customerWidth: 26,
                customerHeight: 26,
              },
              {
                customerImage: "/images/activity/Item (6).png",
                customerAlt: "Customer 5",
                customerWidth: 26,
                customerHeight: 26,
              }
            ],
          },
        ]}
      />

      {/* Example without middleImages and taskTypes */}
      <ActivityTaskPage
        taskCreatedRoutes={[
          {
            taskCreatedRouteIcon: "/images/activity/Icon (18).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (1).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 31,
          }
        ]}
        taskCreatedInfo={[
          {
            taskDescription: "2 new entries in “Landing page UI Design” task",
            taskDate: "2:08 PM by",
            taskPower: "Adam Williams",
          },
        ]}
      />

      {/* Example with middleImages and taskTypes */}
      <ActivityTaskPage
        taskCreatedRoutes={[
            {
            taskCreatedRouteIcon: "/images/activity/Icon (19).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (3).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 124,
            }
        ]}
        taskCreatedInfo={[
            {
            taskDescription: "3 project files uploaded",
            taskDate: "1:56 PM by",
            taskPower: "You",
            }
        ]}
        middleImages={[
            {
            imageSrc: "/images/activity/pdf (1).png",
            imageAlt: "Pdf Icon",
            imageWidth: 30,
            imageHeight: 30,
            },
            {
            imageSrc: "/images/activity/doc (1).png",
            imageAlt: "Doc Icon",
            imageWidth: 30,
            imageHeight: 30,
            },
            {
            imageSrc: "/images/activity/css (1).png",
            imageAlt: "Css Icon",
            imageWidth: 30,
            imageHeight: 30,
            }
        ]}
        middleImageInfo={[
            {
            imageInfo: "Airplus Guideline",
            },
            {
            imageInfo: "FureStibe requirements",
            },
            {
            imageInfo: "FureStibe styles",
            }
        ]}
        middleImageSize={[
            {
            imageSize: "1.2mb",
            },
            {
            imageSize: "8kb",
            },
            {
            imageSize: "54kb",
            }
        ]}
    />
    <ActivityTaskPage
        taskCreatedRoutes={[
          {
            taskCreatedRouteIcon: "/images/activity/Icon (20).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (4).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 31,
          }
        ]}
        taskCreatedInfo={[
          {
            taskDescription: "SPAcorejs.js was merged into FireStibe Task task",
            taskDate: "12:38 PM by",
            taskPower: "Jogn Walles",
          }
        ]}
      />
    <ActivityTaskPage
        taskCreatedRoutes={[
          {
            taskCreatedRouteIcon: "/images/activity/Icon (17).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (1).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 32,
          }
        ]}
        taskCreatedInfo={[
          {
            taskDescription: "Marcus Fold Created & assigned a new task Design Multistep Registraion Form to you ",
            taskDate: "11:02 PM by",
            taskPower: "Marcus Fold",
          }
        ]}
      />
      <ActivityTaskPage
        taskCreatedRoutes={[
            {
            taskCreatedRouteIcon: "/images/activity/Icon (21).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (5).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 291,
            }
        ]}
        taskCreatedInfo={[
            {
            taskDescription: "3 Dashboard concepts uploaded",
            taskDate: "1:56 PM by",
            taskPower: "You",
            }
        ]}
        middleImages={[
            {
            imageSrc: "/images/activity/Item 1.png",
            imageAlt: "item Icon",
            imageWidth: 200,
            imageHeight: 180,
            },
            {
            imageSrc: "/images/activity/Item 2.png",
            imageAlt: "item Icon",
            imageWidth: 200,
            imageHeight: 180,
            },
            {
            imageSrc: "/images/activity/Item 3.png",
            imageAlt: "Item Icon",
            imageWidth: 200,
            imageHeight: 180,
            }
        ]}
    />
    <ActivityTaskPage
        taskCreatedRoutes={[
          {
            taskCreatedRouteIcon: "/images/activity/Icon (17).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (1).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 32,
          }
        ]}
        taskCreatedInfo={[
          {
            taskDescription: "Marcus Fold Created & assigned a new task Design Multistep Registraion Form to you ",
            taskDate: "11:02 PM by",
            taskPower: "Marcus Fold",
          }
        ]}
      />
    <ActivityTaskPage
        taskCreatedRoutes={[
          {
            taskCreatedRouteIcon: "/images/activity/Icon (22).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
            taskCreatedLineIcon: "/images/activity/Line (6).png",
            taskCreatedLineAlt: "Line 1",
            taskCreatedLineWidth: 2,
            taskCreatedLineHeight: 133,
          }
        ]}
        taskCreatedInfo={[
          {
            taskDescription: "You have received your monthly Affiliate Fee",
            taskDate: "2:08 PM by",
            taskPower: "KeenThemes Team",
          }
        ]}
        withdrawalContainers={[
            {
                bankImage: "/images/activity/Duotone.png",
                bankImageAlt: "Bank Icon",
                bankImageWidth: 32,
                bankImageHeight: 32,
                withdrawFund: "Withdraw Your Funds to Bank",
                withdrawStatement:
                    "Withdraw money to your bank account. Commission is $25 per transaction under $50,000.",
                withdrawButton: "Withdraw Money",
            },
        ]}
    />
    <ActivityTaskPage
        taskCreatedRoutes={[
          {
            taskCreatedRouteIcon: "/images/activity/Icon (17).png",
            taskCreatedRouteAlt: "Route Icon 1",
            taskCreatedRouteWidth: 36,
            taskCreatedRouteHeight: 36,
          }
        ]}
        taskCreatedInfo={[
          {
            taskDescription: "SPAcorejs.js was merged into FireStibe Task task",
            taskDate: "12:38 PM by",
            taskPower: "Jogn Walles",
          }
        ]}
      />
    </section>
  )
}

export default ActivityPage