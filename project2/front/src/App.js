import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ITTList from './components/itt/ITTList';
import ITTDetails from './components/itt/ITTDetails';
import Home from './components/common/Home';
import NoMatch from './components/common/NoMatch';
import OfferForm from './components/offer/OfferForm';
import ITTForm from './components/itt/ITTForm';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />} path="/">
        <Route index={true} element={<Home />} />
      </Route>
      <Route element={<MainLayout />} path="/itts">
        <Route index={true}  element={<ITTList completed={false} />}/>
        <Route path="completed"  element={<ITTList completed={true} />}/>
        <Route path=":ittId" element={<ITTDetails />} />
        <Route path="form" element={<ITTForm />} />
      </Route>
      <Route element={<MainLayout />} path="*">
        <Route index={true} element={<NoMatch />} />
      </Route>
      <Route element={<MainLayout />} path="/offers/form">
        <Route index={true} element={<OfferForm />} />
      </Route>
    </Routes>
  );
}

export default App;
