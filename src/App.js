/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import './App.css';
import Loading from './component/Loading/Loading';

export default function MusicPlayer() {
//   const host = "http://localhost:7000";
  const host = "https://tkdserver.onrender.com";
  const searhiconiconlist = [
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/pro.min.css', 'title': 'Font Awesome Icons', 'iocn': 'fab fa-font-awesome-flag', 'key': 'font_awesome_icons'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/bootstrap-icons.css', 'title': 'Bootstrap Icons', 'iocn': 'bi bi-bootstrap-fill', 'key': 'bootstrap_icon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/uicons.css', 'title': 'Uicon', 'iocn': 'fi-rr-resources', 'key': 'uicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/flaticon.css', 'title': 'flaticon', 'iocn': 'fi-rr-resources', 'key': 'flaticon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/ionicons.css', 'title': 'ionicons', 'iocn': 'ion-ios-ionic', 'key': 'ionicons'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/glyphicons.css', 'title': 'GLYPHICONS', 'iocn': 'glyphicon glyphicon-plus-sign', 'key': 'glyphicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/socicon.css', 'title': 'Socicon', 'iocn': 'socicon-istock', 'key': 'socicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/nebular.css', 'title': 'Nebular', 'iocn': 'fad fa-galaxy', 'key': 'nebularicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/curiositystream.css', 'title': 'Csity Stream', 'iocn': 'fi-rr-resources', 'key': 'csitystreamicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/openiconic.css', 'title': 'OPEN ICONIC', 'iocn': 'fi-rr-resources', 'key': 'openiconicicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/boxicons.css', 'title': 'Boxicons', 'iocn': 'bxicon-bxs-cube', 'key': 'boxicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/eva%20icons.css', 'title': 'Eva Icons', 'iocn': 'iconeva-heart-outline', 'key': 'evaicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/icomoon2.css', 'title': 'ionicons2', 'iocn': 'fi-rr-resources', 'key': 'ionicons2'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/icomoon3.css', 'title': 'ionicons3', 'iocn': 'fi-rr-resources', 'key': 'ionicons3'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/icomoon4.css', 'title': 'ionicons4', 'iocn': 'fi-rr-resources', 'key': 'ionicons4'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/iconmonstriconicfont.css', 'title': 'iconmonstr', 'iocn': 'fi-rr-resources', 'key': 'iconmonstricon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/uxwingiconsfont.css', 'title': 'uxwing', 'iocn': 'fi-rr-resources', 'key': 'uxwingicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/tablericons.css', 'title': 'Tabler Icons', 'iocn': 'ti ti-prompt', 'key': 'tablericon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/simplelineicons.css', 'title': 'Simple Line Icons', 'iocn': 'icon-heart', 'key': 'simplelineicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/remixicon.css', 'title': 'REMIX ICON', 'iocn': 'ri-remixicon-line', 'key': 'remixicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/pixelvicon.css', 'title': 'Pixelvicon', 'iocn': 'fi-rr-resources', 'key': 'pixelvicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/brooksfonts.css', 'title': 'brooks font', 'iocn': 'fi-rr-resources', 'key': 'brooksfonticon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/hawcons.css', 'title': 'hawcons', 'iocn': 'fi-rr-resources', 'key': 'hawicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/feather.css', 'title': 'Feather', 'iocn': 'fi-rr-resources', 'key': 'feathericon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/coreui_icons.css', 'title': 'Coreui Icons', 'iocn': 'fi-rr-resources', 'key': 'coreuiicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/appliancesicons.css', 'title': 'appliances icons', 'iocn': 'fi-rr-resources', 'key': 'appliancesicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/thekoushikdurgas.css', 'title': 'TheKoushikDurgas', 'iocn': 'tkd-title3', 'key': 'thekoushikdurgasicon'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/customicons.css', 'title': 'TheKoushikDurgas', 'iocn': 'tkd-title3', 'key': 'thekoushikdurgasicon1'}, 
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/weathericon.css', 'title': 'Weather Icons', 'iocn': 'wi wi-day-cloudy', 'key': 'weathericon'},
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/cartzillaicons.css', 'title': 'Cartzilla Icons', 'iocn': 'wi wi-day-cloudy', 'key': 'cartzillaicons'},
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/learnnet.css', 'title': 'Karmaa Labs', 'iocn': 'wi wi-day-cloudy', 'key': 'learnnet'},
      {'link': 'https://thekoushikdurgas.github.io/TKDstroage/css/iconscout.css', 'title': 'Iconscout', 'iocn': 'wi wi-day-cloudy', 'key': 'iconscout'},
  ];
  const [iconlist, seticonlist] = useState([]);
  const geticonlist = async () => { axios.get(`${host}/api/icons`, { method: 'GET', headers: { 'Content-Type': 'application/json', "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5ZmE4M2I2Zjc1OGY0OGIxY2E4YzdmIn0sImlhdCI6MTY1NDY5MDYwMX0._sln2d2AROxcp0qMosUrIIkNkW5PNZsm2YUBFNL3mvg" } }).then((response) => { seticonlist(response.data) }); }
  const clipboardcode = (a) => { if (!a) { return; } const textarea = document.createElement("textarea"); textarea.value = a; document.body.appendChild(textarea); textarea.select(); document.execCommand("copy"); textarea.remove(); window.prompt('copied!', a); }
  const [icon2list,seticon2list] = useState([]);
  const [render,setrender] = useState(true);
  const [search,setsearch] = useState('');
  const [show1,setshow1] = useState(true);
  const [hydrated,sethydrated] = useState(false);
  const [hydratedicon,sethydratedicon] = useState('fal fa-chevron-circle-down');
  const [csscontentcodetxt,setcsscontentcodetxt] = useState('e905');
  const [lengthicon,setlengthicon] = useState([]);
  var temp;
  const opendiv = (a) => {
      sethydrated(true);
      sethydratedicon(a[0]);
      setcsscontentcodetxt(a[1]);
  }
  const moreicons = (a) => {
      temp = lengthicon;
      temp[a]+=10;
      setlengthicon(temp);
  }
  const searchjson = (b) => {return iconlist.filter(function (x) {if (x['name'].toLowerCase().indexOf(b.toLowerCase()) > -1){return x;}})}
  useEffect(() => {
    if(render){
      if(iconlist.length !== 0){
          temp = [];
          for (var i = 0; i < searhiconiconlist.length; i++) {temp.push(10);}
          setlengthicon(temp);
        //   seticon2list(iconlist);
        console.log(Cookies.get('iconsearch')===undefined?"":Cookies.get('iconsearch'));
          setsearch(Cookies.get('iconsearch')===undefined?"":Cookies.get('iconsearch'));
          seticon2list(searchjson(Cookies.get('iconsearch')===undefined?"":Cookies.get('iconsearch')));
          setrender(false);
      }
      else{geticonlist();}
    }
    setshow1(search.length > 0?false:true);
  }, [render,iconlist,search,searhiconiconlist]);
  return (
      <div className='tkdicon'>
          <div className="iconsblock">
          <div className="iconsblocksearchbox">
              <div className="tkdform1">
                  <div className="field">
                      <input type="text" id="searchicon" name="searchicon" value={search} placeholder="eg. ...." autoComplete="off" className="inputlo" onChange={(event)=>{setsearch(event.target.value);seticon2list(searchjson(event.target.value));Cookies.set('iconsearch', event.target.value, { path: '', domain: '.thekoushikdurgas.in' });}}/>
                      <i className={`fab fa-searchengin ${show1?'show':''}`} id="fasearchengin"></i>
                      <i className={`fad fa-times ${show1?'':'show'}`} id="fatimes" onClick={()=>{setsearch('');seticon2list(searchjson(''));}}></i>
                  </div>
              </div>
          </div>
          {iconlist.length !== 0 ? (
              <div className="iconsblocklist">
                  {searhiconiconlist.map((object, i) => {
                      if(icon2list.filter(element => element.icontype === object.key).length > 0){
                          return (
                              <div key={i}>
                                  <div className="iconheading">
                                      <a href={object.link} target="_blank" rel="noreferrer">
                                          <i className={object.iocn}></i>
                                          <span>{object.title}</span>
                                      </a>
                                  </div>
                                  <ul>
                                      {icon2list.filter(element => element.icontype === object.key).slice(0,lengthicon[i]).map((object1, i1) =>
                                          <li key={i1}><div className='iconli' onClick={()=>{opendiv([object1.name,object1.csscontentcode])}}><i className={object1.name}></i></div></li>
                                      )}
                                      {icon2list.filter(element => element.icontype === object.key).length > lengthicon[i] ? (         
                                          <li>
                                              <div className='iconli' onClick={()=>{moreicons(i);sethydrated(!hydrated);}}>
                                                  <i className="fal fa-chevron-circle-down"></i>
                                                  <div className="copycode">
                                                  <span className="copycodespan"><span>Load</span><span> more </span><span>icons...</span></span>
                                                  </div>
                                              </div>
                                          </li>
                                      ) : (<></>)}
                                  </ul>   
                              </div>            
                          )
                      }
                      else{return (<div key={i}></div>)}
                  })}
              </div>
              ) : (
                  <Loading />
              )}
          </div>
          <div className={`hydrated ${hydrated?'visiable':''}`}>
            <div className="hydratedcontainer gap-2">
                <div className="hydrateddiv">
                <div className="copydiv">
                    <span>Css code :</span>
                    <i className="fas fa-copy" id="csscontentcodecopy" onClick={()=>{clipboardcode(csscontentcodetxt)}}></i>
                </div>
                <code className="copycodespan">
                    <span className="hover-highlight">
                        <span className="yellow">{`{content:`}</span>
                        <span className="red">"\</span>
                        <span className="green" id="csscontentcodetxt">{csscontentcodetxt}</span>
                        <span className="red">"</span>{`;}`}
                    </span>
                </code>
                </div>
                <div className="hydrateddiv">
                <div className="copydiv">
                    <span>HTMl code :</span>
                    <i className="fas fa-copy" id="namecopy" onClick={()=>{clipboardcode(hydratedicon)}}></i>
                </div>
                <code className="copycodespan">
                    <span className="hover-highlight">&lt;<span className="yellow">i</span>&nbsp;<span className="red">class</span>="<span className="green" id="nametxt">{hydratedicon}</span>"&gt;&lt;/<span className="yellow">i</span>&gt;</span>
                </code>
                </div>
                <div className="hydratedicon"> 
                <i className={hydratedicon}></i>
                </div>
                <button className="close-btn close-btn1" id="hydratedclosebtn" onClick={()=>{sethydrated(false)}}><i className="fas fa-times"></i></button>
            </div>
          </div>
      </div>
  )
}
