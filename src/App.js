import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Accordian from "./Accordian";
// import TabView from "./TabView";
// import FuncBaseCrud from "./Components/FuncBaseCrud";
import ClassBaseComp from "./Components/ClassBaseComp";
import ClassBaseLifeCycle from "./Components/ClassBaseLifeCycle";
import FuncBaseLifeCycle from "./Components/FuncBaseLifeCycle";
import ChildToParentData from "./Components/ChildToParentData";
import Child1 from "./Components/Child1";
import TwoForm from "./Components/TwoInOne/TwoForm";
import UseMemoComp from "./Components/UseMemoComp";
import UseCallBackComp from "./Components/UseCallBackComp";
import CustomComp from "./Components/CustomComp";
import "./Styling.scss"
import PureClassComponent from "./Components/PureClassComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Gallery from "./Components/Pages/Gallery";
import Information from "./Components/Pages/Information";
import Header from "./Components/Header";
import ReactJs from "./Components/Pages/ReactJs";
import NodeJs from "./Components/Pages/NodeJs";
import Error from "./Components/Pages/Error";
import Login from "./Components/Pages/Login";
import FunctionBaseRouting from "./Components/RoutingCrud/FunctionBaseRouting";
import ClassBaseRoutingCrud from "./Components/ClassBaseRoutingCrud/ClassBaseRoutingCrud";
import FormValidation from "./Components/FormValidation";
import ApiCrud from "./Components/Api/ApiCrud";
import ImageApiCrud from "./Components/Api/ImageApiCrud";
import TokenApiCrud from "./Components/Api/TokenApiCrud";
import FetchApiCrud from "./Components/Api/FetchApiCrud";
import ReducerComp from "./Components/ReducerComp";
import ReducerCrud from "./Components/ReducerCrud";
import TableTask from "./Components/TableTask";
import SelectionOfAB from "./Components/SelectionOfAB";
import FormValidationHook from "./Components/FormValidationHook";
import ApplyRedux from "./Components/ApplyRedux";
import { useDispatch, useSelector } from "react-redux";
import CrudRedux from "./Components/CrudRedux";
import { getStudentData } from "./Components/Redux/Action/apiCrudAction";
import ApiReduxCrud from "./Components/ApiReduxCrud";
import ChartData from "./Components/Chart";
// import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

export const userContext = createContext("");

const App = () => {
  const count = useSelector(state => state?.count?.count);
  const student = useSelector(state => state?.student?.student);
  const dispatch = useDispatch();
  const [num, setNum] = CustomComp(12);
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState("Ronak")
  const data = "Krish";
  useEffect(() => {
    dispatch(getStudentData()); 
  }, [])

  // console.log(student , 'student')
  
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  // const [open, setOpen] = useState('1');
  // const toggle = (id) => {
  //   console.log(id)
  //   if (open === id) {
  //     setOpen();
  //   } else {
  //     setOpen(id);
  //   }
  // };

  const getValue = (val) => {
    setValue(val)
  }
  return (
    <>
    {/* <h1 className="text-center">{count}</h1> */}
    {/* <h1 className="text-center">{num}</h1>
    <div className="text-center">
      <button className="btn btn-success" onClick={() => setNum(num + 1)}>Click</button>
    </div> */}
      {/* <div className='text-center'>
      <Button className='p-4' variant="danger">Primary</Button>
    </div> */}
      {/* <div>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div> */}
      {/* <Slider {...settings}>
        <div className='text-center'>
          <h3>1</h3>
        </div>
        <div className='text-center'>
          <h3>2</h3>
        </div>
        <div className='text-center'>
          <h3>3</h3>
        </div>
        <div className='text-center'>
          <h3>4</h3>
        </div>
        <div className='text-center'>
          <h3>5</h3>
        </div>
        <div className='text-center'>
          <h3>6</h3>
        </div>
      </Slider> */}
      {/* <FuncBaseCrud data={data} ary1={[1,2,3]}/> */}
      {/* <ClassBaseComp data={data} ary1={[1,2,3]} /> */}

      {/* <button className="mx-auto d-block btn btn-warning" onClick={() => setShow(!show)}>Click Here</button>

      {
        show ? <ClassBaseLifeCycle data={data} ary1={[1,2,3]} /> : <></>
      } */}
      {/* <button className="mx-auto d-block btn btn-warning" onClick={() => setShow(!show)}>Click Here</button>

      {
        show ? <FuncBaseLifeCycle /> : <></>
      } */}
{/* <h1 className="text-center">{value}</h1>
      <ChildToParentData getValue={getValue}/> */}
      
      {/* <Accordian /> */}
      {/* <TabView /> */}
      {/* <userContext.Provider value={{userData, setUserData}}>
        <Child1 data={data}/>
      </userContext.Provider> */}

      {/* <TwoForm /> */}
      {/* <UseMemoComp /> */}
      {/* <UseCallBackComp /> */}
      {/* <PureClassComponent /> */}

      {/* <div className="main main_p2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sunt dolor odit eaque rerum impedit dolore cumque iusto, nihil dolores ipsa non est perspiciatis eum hic esse consequuntur fuga nulla.
          <h3>Hello</h3>
        </p>
        <p className="">World</p>
      </div> */}

      {/* <BrowserRouter>
      <Header />
        <Routes>
          {
            (JSON.parse(localStorage.getItem("isLogin")) != true) ?
            <>
              <Route path="/" element={<Navigate to={"/login"} />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<Error />}></Route>
            </>
            :
            <>
              <Route path="/" element={<Navigate to={"/home"}/>}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/gallery" element={<Gallery />}></Route>
              <Route path="/information" element={<Information />}>
                <Route path="react" element={<ReactJs />} />
                <Route path="node" element={<NodeJs />} />
              </Route>
              <Route path="*" element={<Error />}></Route>
            </>
          }
        </Routes>
      </BrowserRouter> */}

      {/* <FunctionBaseRouting /> */}
      {/* <ClassBaseRoutingCrud /> */}

      {/* <FormValidation /> */}
      {/* <ApiCrud /> */}
      {/* <ImageApiCrud /> */}
      {/* <TokenApiCrud /> */}
      {/* <FetchApiCrud /> */}
      {/* <ReducerComp /> */}
      {/* <ReducerCrud /> */}
      {/* <TableTask /> */}
      {/* <SelectionOfAB /> */}
      {/* <FormValidationHook /> */}
      {/* <ApplyRedux /> */}
      {/* <CrudRedux /> */}
      {/* <ApiReduxCrud /> */}
      <ChartData />
    </>
  );
};

export default App;
