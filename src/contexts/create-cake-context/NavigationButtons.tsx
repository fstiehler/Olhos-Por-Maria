import React from "react";
import { Button, message } from "antd";

interface NavigationButtonsProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => Promise<void>;
  steps: { title: string; content: React.ReactNode }[];
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  current,
  setCurrent,
  handleSubmit,
  steps,
}) => {
  return (
    <div style={{ marginTop: 10 }}>
      {current > 0 && (
        <Button onClick={() => setCurrent(current - 1)}>Anterior</Button>
      )}
      {current < steps.length - 1 ? (
        <Button onClick={() => setCurrent(current + 1)}>Próximo</Button>
      ) : (
        <Button
          style={{
            backgroundColor: "#C47D7A",
            color: "#ffffff",
            borderColor: "#C47D7A",
          }}
          onClick={() => [
            message.success("Processo finalizado com sucesso!"),
            handleSubmit(),
          ]}
        >
          Enviar
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
