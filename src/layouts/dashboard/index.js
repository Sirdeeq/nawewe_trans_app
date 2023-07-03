// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Data
import ReusableTabs from "examples/Tab";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import SellComponent from "./components/SellComponent";
import SoftTypography from "components/SoftTypography";

function Dashboard() {
  const tabs = [
    {
      label: "Sell",
      content: <SellComponent />, // Replace 'DefaultInfoCard' with the desired component
    },
    {
      label: "Rent",
      content: <DefaultInfoCard />, // Replace 'DefaultInfoCard' with the desired component
    },
    {
      label: "Sell",
      content: <DefaultInfoCard />, // Replace 'DefaultInfoCard' with the desired component
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <SoftBox>
            <SoftTypography variant="h1" gutterBottom>
              Hello Olalade
            </SoftTypography>
            <SoftTypography variant="h5" gutterBottom>
              What would you like to do?
            </SoftTypography>
          </SoftBox>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <ReusableTabs tabs={tabs} />
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
