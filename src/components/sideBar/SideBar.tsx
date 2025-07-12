import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./style.css";
import {
  AnalyticsIcon,
  CustomerServiceIcon,
  DocumentIcon,
  DropDownIcon,
  FeedbackIcon,
  FreightIcon,
  HrTargetIcon,
  InventoryIcon,
  OperationsIcon,
  PriceTagIcon,
  TaxIcon,
  UserIcon,
} from "../icons/Icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface SideBarItemProps {
  leftIcon: React.ReactNode;
  label: React.ReactNode | string;
  isOpen: boolean;
  link?: string;
  children: SideBarChildProps[];
  onClick: () => void;
}

interface SideBarChildProps {
  label: string;
  link: string;
  active?: string;
}

const SideBar: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set the active item based on the current route
    sideBarItems.forEach((item, index) => {
      item.children.forEach((child) => {
        if (location.pathname.startsWith(child.active || child.link)) {
          setActiveItem(index); // Set the active item based on the current route
          setOpenItems((prevState) => ({
            ...prevState,
            [index]: true, // Open the parent item if a child is active
          }));
        }
      });
    });
  }, [location.pathname]);

  // notes :
  const handleChangeIconColor = (Icon: React.ReactNode, isOpen: boolean) => {
    return React.cloneElement(Icon as React.ReactElement, {
      color: isOpen ? "#2c398f" : "#fdfdfd", // Set color dynamically based on isOpen state
    });
  };

  // Memoize the handleItemClick function using useCallback
  const handleItemClick = useCallback((index: number, link?: string) => {
    setOpenItems((prevState) => {
      const newState = { ...prevState };
      // Close all other items and toggle the clicked one
      for (let key in newState) {
        if (Number(key) !== index) {
          newState[key] = false;
        }
      }
      newState[index] = !newState[index];
      // newState[index] = true;
      return newState;
    });
    setActiveItem(index); // Set active item when clicked
    if (link) {
      navigate(link);
    }
  }, []);

  // Memoize the sideBarItems array to avoid unnecessary recalculations
  const sideBarItems: SideBarItemProps[] = useMemo(
    () => [
      {
        leftIcon: <AnalyticsIcon />,
        label: "Analytics",
        isOpen: openItems[0] || false,
        children: [],
        onClick: () => handleItemClick(0, "/"),
      },
      {
        leftIcon: <UserIcon />,
        label: "Registration",
        isOpen: openItems[1] || false,
        children: [
          { link: "/registration-user", label: "User Registration" },
          { link: "/registration-carrier", label: "Carrier Registration" },
          { link: "/registration-vendor", label: "Vendor Registration" },
          {
            link: "/registration-empty-depot",
            label: "Empty Depot Registration",
          },
        ],
        onClick: () => handleItemClick(1),
      },
      {
        leftIcon: <FreightIcon />,
        label: "Sales & Marketing",
        isOpen: openItems[2] || false,
        children: [
          { label: "Leads and CRM", link: "/enquiry" },
          { label: "Booking", link: "/booking" },
          { label: "Rate Tariff", link: "/rate-tariff" },
        ],
        onClick: () => handleItemClick(2),
      },
      {
        leftIcon: <CustomerServiceIcon />,
        label: "Customer Service",
        isOpen: openItems[3] || false,
        children: [
          {
            label: "Air & Sea Schedule",
            link: "/sea-air-schedule/sea-freight",
            active: "/sea-air-schedule",
          },
          {
            label: "Shipment Updates",
            link: "/shipment-updates/sea-freight",
            active: "/shipment-updates",
          },
          {
            label: "Cargo Arrival Notice",
            link: "/cargo-arrival-notice/sea-freight",
            active: "/cargo-arrival-notice",
          },
        ],
        onClick: () => handleItemClick(3),
      },
      {
        leftIcon: <DocumentIcon />,
        label: "Documentation",
        isOpen: openItems[4] || false,
        children: [
          {
            label: "Bill of Lading (Sea Freight)",
            link: "/bill-of-lading/sea-freight",
            active: "/bill-of-lading/sea-freight",
          },
          {
            label: "Bill of Lading (Air Freight)",
            link: "/bill-of-lading/air-freight",
            active: "/bill-of-lading/air-freight",
          },
        ],
        onClick: () => handleItemClick(4),
      },
      {
        leftIcon: <TaxIcon />,
        label: "Accounts",
        isOpen: openItems[5] || false,
        children: [
          { label: "Bank", link: "/accounts/bank" },
          { label: "Invoice (Import)", link: "/accounts/invoice-import" },
          {
            label: "Carrier Invoice (Import)",
            link: "/accounts/carrier-invoice-import",
          },
          { label: "Invoice (Export)", link: "/accounts/invoice-export" },
          {
            label: "Carrier Invoice (Export)",
            link: "/accounts/carrier-invoice-export",
          },
          {
            label: "Agent SOA Dashboard ",
            link: "/accounts/agent-soa-dashboard",
          },
          { label: "Agent SOA (Import) ", link: "/accounts/agent-soa-import" },
          { label: "Agent SOA (Export) ", link: "/accounts/agent-soa-export" },
        ],
        onClick: () => handleItemClick(5),
      },
      {
        leftIcon: <InventoryIcon />,
        label: "Inventory",
        isOpen: openItems[6] || false,
        children: [],
        onClick: () => handleItemClick(6),
      },
      {
        leftIcon: <PriceTagIcon />,
        label: "Pricing & Procurement",
        isOpen: openItems[7] || false,
        children: [
          { label: "Rate Filing", link: "/rate-filing" },
          { label: "Rate Mailing", link: "/rate-mailing" },
          {
            label: "Other Vendors",
            link: "/other-vendors/vendor-for-shipping",
            active: "/other-vendors",
          },
        ],

        onClick: () => handleItemClick(7),
      },
      {
        leftIcon: <OperationsIcon />,
        label: "Operations",
        isOpen: openItems[8] || false,
        children: [
          {
            label: "Container Release Order",
            link: "/container-release-order",
          },
          { label: "VGM Filing Update", link: "/vgm-filing" },
          {
            label: "Cargo Manifest",
            link: "/cargo-manifest/sea-freight",
            active: "/cargo-manifest",
          },
        ],
        onClick: () => handleItemClick(8),
      },
      {
        leftIcon: <HrTargetIcon />,
        label: "HRM",
        isOpen: openItems[9] || false,
        children: [
          { label: "Employees", link: "/hrm/employees" },
          { label: "Attendance", link: "/hrm/attendance" },
          { label: "Leave Form", link: "/hrm/leave-form" },
          { label: "Requirement", link: "/hrm/requirement" },
        ],
        onClick: () => handleItemClick(9),
      },
      {
        leftIcon: <FeedbackIcon />,
        label: "Testimonials",
        isOpen: openItems[10] || false,
        children: [],
        onClick: () => handleItemClick(10, "/testimonials"),
      },
    ],
    [openItems, handleItemClick]
  );

  return (
    <div className="text-grey-50 text-sm font-semibold px-5 py-2 flex flex-col gap-2 overflow-scroll h-full pb-32 ">
      {sideBarItems.map((item, index) => (
        <SideBarItem
          key={index}
          leftIcon={handleChangeIconColor(item.leftIcon, item.isOpen)}
          // leftIcon={item.leftIcon}
          label={item.label}
          isOpen={item.isOpen}
          children={item.children}
          onClick={item.onClick}
          isActive={activeItem === index} // Pass active status to SideBarItem
        />
      ))}
    </div>
  );
};

const SideBarItem: React.FC<SideBarItemProps & { isActive: boolean }> = ({
  leftIcon,
  label,
  isOpen,
  children,
  onClick,
  isActive,
}) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer z-20">
      <div
        className={`flex items-center rounded justify-between px-4 py-2 transition-all duration-300    ${
          isOpen ? "bg-grey-50 text-primary" : ""
        }  ${isActive ? "bg-blue-500" : "hover:bg-white hover:bg-opacity-30 "}`}
        onClick={onClick}
      >
        <div className={`flex items-center justify-start gap-4 w-full`}>
          <div>{leftIcon}</div>
          <p>{label}</p>
        </div>
        <div
          className={`${
            isOpen ? "-rotate-180" : ""
          } transition-all duration-700`}
        >
          {children.length > 0 && (
            <DropDownIcon color={isOpen ? "#2c398f" : "#fcfcfc "} />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500`}
        style={{
          maxHeight: isOpen
            ? `${Math.min(children.length * 40, 500)}px`
            : "0px",
        }}
      >
        <ul className="flex flex-col gap-1">
          {children.map((child, index) => (
            <Link
              to={child.link}
              key={index}
              className={`py-2 px-6 rounded flex items-center gap-2 ${
                location.pathname.startsWith(child.active || child.link)
                  ? "bg-[#ffffff] bg-opacity-40 "
                  : ""
              }`}
            >
              <span className="w-2 h-2 rounded-full border border-grey-50 flex-shrink-0"></span>{" "}
              <span className="text-nowrap"> {child.label}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
