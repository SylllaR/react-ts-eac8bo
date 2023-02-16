import * as React from 'react';
import './style.scss';
import { BrushButton } from '../../components';
import useMousePosition from '../../hooks/useMousePosition';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const mousePosition = useMousePosition();
  const navigate = useNavigate();

  const [posX, setPosX] = React.useState(`translate(0px, 0px)`);

  React.useEffect(() => {
    setPosX(
      `translate(calc(0% - ${mousePosition.x / 100}px), calc(-50% - ${
        mousePosition.y / 100
      }px)`
    );
  }, [mousePosition]);

  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="main">
      <div className="main-content">
        <span className="bkg-text" style={{ transform: posX }}>
          Comfort Food
        </span>
        <div className="main-content-texts">
          <h2 className="main-content-title">
            Lorem ipsum ipsum <br />
            <span className="red"> dolor </span>amet.
          </h2>
          <p className="main-content-description">
            Lorem ipsum dolor sit amet{' '}
            <span className="red"> consectetur.</span>
          </p>
          <div className="main-content-btn">
            <BrushButton title={t("main.let's-go")} onClick={goToMenu} />
          </div>
        </div>
        <img
          className="main-content-img"
          src="https://drive.google.com/uc?export=view&id=1AybsmnH0HU2Bd7cZ4xP0CI-izCPBhd9K"
        />
      </div>

      <div className="bottom-border">
        <img
          className="bottom-border-red"
          src="https://drive.google.com/uc?export=view&id=1YhUd44aTueUXr-o-ZgC3AipoC5oL45Fb"
        />
        <img
          className="bottom-border-white"
          src="https://drive.google.com/uc?export=view&id=1vSL2jwTwcix4Ao0URGgrSEpI6qYpJJnT"
        />
      </div>
    </div>
  );
};
