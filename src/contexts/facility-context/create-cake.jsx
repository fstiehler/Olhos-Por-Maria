import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import {
  ContentWrapper,
  NavigationButtons,
  FormStep1,
  FormStep2,
  FormStep3,
  FormStep4,
} from "../create-cake-context";

function CreateCake() {
  const [formRequestData, setRequestFormData] = useState({
    cakeTypes: [
      {
        name: "",
        sizes: [
          {
            size: "",
            description: "",
            serving: "",
            weight: "",
            price: 0.0,
          },
        ],
        cakeFlavors: [
          {
            flavor: "",
            fillings: [
              {
                flavor: "",
                description: "",
                additionalPrice: 0.0,
              },
            ],
          },
        ],
        decorations: [
          {
            type: "",
            description: "",
            additionalPrice: 0.0,
          },
        ],
        date: "",
        pagament: "",
        additional: [
          {
            type: "",
            additionalPrice: 0.0,
          },
        ],
      },
    ],
  });

  const [selectedCakeType, setSelectedCakeType] = useState("");
  const [selectedCakeSize, setSelectedCakeSize] = useState("");
  const [selectedCakeFlavor, setSelectedCakeFlavor] = useState("");
  const [selectedCakeFilling, setSelectedCakeFilling] = useState("");
  const [selectedCakeDecoration, setSelectedCakeDecoration] = useState("");

  const handleCakeTypeChange = (value) => {
    setSelectedCakeType(value);
    setSelectedCakeSize("");
    setSelectedCakeFlavor("");
    setSelectedCakeFilling("");
    setSelectedCakeDecoration("");
  };

  const handleCakeSizeChange = (value) => {
    setSelectedCakeSize(value);
  };

  const handleCakeFlavorChange = (value) => {
    setSelectedCakeFlavor(value);
    setSelectedCakeFilling("");
  };

  const handleCakeFillingChange = (value) => {
    setSelectedCakeFilling(value);
  };

  const handleCakeDecorationChange = (value) => {
    setSelectedCakeDecoration(value);
  };

  const [isMobile, setIsMobile] = useState(false);

  const steps = [
    {
      title: "Escolher o tipo do bolo",
      content: (
        <FormStep1
          selectedCakeType={selectedCakeType}
          handleCakeTypeChange={handleCakeTypeChange}
          handleCakeSizeChange={handleCakeSizeChange}
          selectedCakeSize={selectedCakeSize}
        />
      ),
    },
    {
      title: "Selecione o recheio",
      content: (
        <FormStep2
          selectedCakeType={selectedCakeType}
          selectedCakeFlavor={selectedCakeFlavor}
          handleCakeFlavorChange={handleCakeFlavorChange}
          selectedCakeFilling={selectedCakeFilling}
          handleCakeFillingChange={handleCakeFillingChange}
        />
      ),
    },
    {
      title: "Selecione a decoração",
      content: (
        <FormStep3
          selectedCakeType={selectedCakeType}
          selectedCakeDecoration={selectedCakeDecoration}
          handleCakeDecorationChange={handleCakeDecorationChange}
        />
      ),
    },
    {
      title: "Agende a data de entrega",
      content: (
        <FormStep4
          formData={formRequestData}
          setRequestFormData={setRequestFormData}
          handleDateChange={(date) =>
            setRequestFormData((prevFormData) => ({
              ...prevFormData,
              date: date,
            }))
          }
          handlePaymentChange={(payment) =>
            setRequestFormData((prevFormData) => ({
              ...prevFormData,
              pagament: payment,
            }))
          }
        />
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = async () => {
    try {
      console.log(formRequestData);
    } catch (error) {
      console.error(error);
    }
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {isMobile ? (
        <>
          <h1 style={{ textAlign: "center", fontFamily: "Inter" }}>
            Monte seu bolo
          </h1>
          <ContentWrapper current={currentStep}>
            {steps[currentStep].content}
          </ContentWrapper>
          <div style={{ marginTop: 10 }}>
            <NavigationButtons
              current={currentStep}
              setCurrent={setCurrentStep}
              handleSubmit={handleSubmit}
              steps={steps}
              next={next}
              prev={prev}
            />
          </div>
        </>
      ) : (
        <>
          <Steps
            current={currentStep}
            items={steps.map((item) => ({
              key: item.title,
              title: item.title,
            }))}
          />
          <ContentWrapper current={currentStep}>
            {steps[currentStep].content}
          </ContentWrapper>
          <div style={{ marginTop: 10 }}>
            <NavigationButtons
              current={currentStep}
              setCurrent={setCurrentStep}
              handleSubmit={handleSubmit}
              steps={steps}
              next={next}
              prev={prev}
            />
          </div>
        </>
      )}
    </>
  );
}
export { CreateCake };
