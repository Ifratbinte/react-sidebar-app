import {
  FaAdn,
  FaBookOpen,
  FaCalculator,
  FaDonate,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaPoll,
  FaThLarge,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";
const items = [
  {
    title: "Dashboard",
    icon: <FaThLarge />,
  },
  {
    title: "Students",
    icon: <FaUserGraduate />,
    children: [
      {
        title: "Profile",
        icon: <FaThLarge />,
        path: "/",
      },
      {
        title: "Result",
        icon: <FaThLarge />,
        children: [
          {
            title: "Facebook",
            icon: <FaThLarge />,
          },
        ],
      },
      {
        title: "Fees",
        icon: <FaThLarge />,
        path: "/",
      },
      {
        title: "Attendance",
        icon: <FaThLarge />,
        path: "/",
      },
      {
        title: "Transcript",
        icon: <FaThLarge />,
      },
    ],
  },
  {
    title: "Staff",
    icon: <FaUserFriends />,
  },
  {
    title: "Accounts",
    icon: <FaCalculator />,
  },
  {
    title: "Academic Analysis",
    icon: <FaBookOpen />,
  },
  {
    title: "Payroll",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "Admission & Financial AID",
    icon: <FaDonate />,
  },
  {
    title: "Registration & Scheduling",
    icon: <FaAdn />,
  },
  {
    title: "Payments",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Reports",
    icon: <FaPoll />,
  },
];
export default items;
// {
//     title: "Dashboard",
//     "icon": "bi-gear-fill"
// },
// {
//     "title": "General",
//     "icon": "bi-gear-fill",
//     "children": [
//         {
//             "title": "Home",
//             "icon": "bi-house-fill",
//             "path": "/"
//         },
//         {
//             "title": "About",
//             "icon": "bi-info-circle-fill",
//             "path": "/about"
//         },
//         {
//             "title": "Contact",
//             "icon": "bi-phone-fill",
//             "children": [
//                 {
//                     "title": "Facebook",
//                     "icon": "bi-facebook"
//                 },
//                 {
//                     "title": "Twitter",
//                     "icon": "bi-twitter"
//                 },
//                 {
//                     "title": "Instagram",
//                     "icon": "bi-instagram"
//                 }
//             ]
//         },
//         {
//             "title": "FAQ",
//             "icon": "bi-question-circle-fill"
//         }
//     ]
// },
// {
//     "title": "Account",
//     "icon": "bi-info-circle-fill",
//     "children": [
//         {
//             "title": "Login",
//             "path": "/login"
//         },
//         {
//             "title": "Register",
//             "path": "/register"
//         },
//         {
//             "title": "Forgot Password",
//             "path": "/forgot-password"
//         },
//         {
//             "title": "Reset Password",
//             "path": "/reset-password"
//         }
//     ]
// },
// {
//     "title": "Profile",
//     "icon": "bi-person-fill",
//     "children": [
//         {
//             "title": "Profile",
//             "path": "/profile"
//         },
//         {
//             "title": "Settings",
//             "children": [
//                 {
//                     "title": "Account",
//                     "path": "/settings/account"
//                 },
//                 {
//                     "title": "Billing",
//                     "children": [
//                         {
//                             "title": "Payment",
//                             "path": "/settings/billing/payment"
//                         },
//                         {
//                             "title": "Subscription",
//                             "path": "/settings/billing/subscription"
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Notifications",
//                     "path": "/settings/notifications"
//                 }
//             ]
//         },
//         {
//             "title": "Logout",
//             "path": "/logout"
//         }
//     ]
// },
// {
//     "title": "Advance",
//     "icon": "bi-view-list",
//     "children": [
//         {
//             "title": "Search",
//             "path": "/search"
//         },
//         {
//             "title": "History",
//             "path": "/history"
//         }
//     ]
// },
// {
//     "title": "Support",
//     "icon": "bi-question-circle-fill",
//     "path": "/support"
// },
// {
//     "title": "Report Bug",
//     "icon": "bi-bug",
//     "path": "/report-bug"
// }
