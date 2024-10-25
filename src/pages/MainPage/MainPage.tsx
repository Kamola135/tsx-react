import "./MainPage.scss";
import { Navbar } from "../../components/UI/Header/Navbar";
import { LeftSidebar } from "../../components/UI/Header/LeftSidebar";
import { MainContent } from "../../components/UI/Header/MainContent";
import { RightSidebar } from "../../components/UI/Header/RightSidebar";

export const MainPage = () => {
  return (
    <div className="MainPage">
            <LeftSidebar />
            <MainContent />
            <RightSidebar />
    </div>
  );
};
