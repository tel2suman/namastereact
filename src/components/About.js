 
 import React from "react";

 import { Outlet } from "react-router-dom";

 import Profile from "./ProfileClass";

 import ProfileFunction from "./Profile";

 import { Component } from "react";

 import { useContext } from "react";

 import UserContext from "../utils/UserContext";

    class About extends Component {

        constructor(props){
            super(props);
            //console.log("parent- constructor");
        }

        componentDidMount(){
            //API Calls

        }

        render(){
            //console.log("parent- render");
            return (
              <React.Fragment>
                <div>
                  <section className="bg-gray-100 dark:text-gray-100">
                    <div className="container max-w-xl p-6 py-36 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                      <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-amber-500">
                          Aliquip definiebas ad est
                        </h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-lime-600">
                          Quando cetero his ne, eum admodum sapientem ut.
                        </p>
                      </div>
                      <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                          <UserContext.Consumer>
                            {({user}) =><h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-amber-500">About {user.name}</h3>}
                          </UserContext.Consumer>
                          <p className="mt-3 text-lg dark:text-black font-medium">
                            Ne dicta praesent ocurreret has, diam theophrastus
                            at pro. Eos etiam regione ut, persius eripuit quo
                            id. Sit te euismod tacimates.
                          </p>
                          <div className="mt-12 space-y-12">
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-amber-500 dark:text-gray-900">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-7 h-7"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-lime-600">
                                  Per ei quaeque sensibus
                                </h4>
                                <p className="mt-2 dark:text-black font-medium">
                                  Ex usu illum iudico molestie. Pro ne agam
                                  facete mediocritatem, ridens labore facete mea
                                  ei. Pro id apeirian dignissim.
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-amber-500 dark:text-gray-900">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-7 h-7"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-lime-600">
                                  Cu imperdiet posidonium sed
                                </h4>
                                <p className="mt-2 dark:text-black font-medium">
                                  Amet utinam aliquando ut mea, malis admodum
                                  ocurreret nec et, elit tibique cu nec. Nec ex
                                  maluisset inciderint, ex quis.
                                </p>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-amber-500 dark:text-gray-900">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-7 h-7"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-lime-600">
                                  Nulla omittam sadipscing mel ne
                                </h4>
                                <p className="mt-2 dark:text-black font-medium">
                                  At sed possim oporteat probatus, justo graece
                                  ne nec, minim commodo legimus ut vix. Ut eos
                                  iudico quando soleat, nam modus.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                          <img
                            src="https://source.unsplash.com/random/360x480"
                            alt=""
                            className="mx-auto rounded-lg shadow-lg w-auto dark:bg-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </React.Fragment>
            );
        };
    }
 
 export default About;
 
