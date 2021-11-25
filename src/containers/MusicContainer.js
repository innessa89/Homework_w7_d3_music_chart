import React,{useEffect,useState} from "react";
import Music from "../components/Music";

const MusicContainer=()=>{

    const[musicList, setMusicList]=useState([]);
    const[selectedMusic,setSelectedMusic]=useState();

    const getPlaylist=()=>{ 
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res=>res.json())
            .then(musicData=>setMusicList(musicData.feed.entry));
    };

    useEffect(() => {
        getPlaylist()
      }, []);


      
    return(
        <>
            <h1>UK top 20 songs</h1>
            <ul>
                {musicList.map((music)=>{
                        return <li onClick={() => setSelectedMusic(music)} key={music.title.label}>{music.title.label}</li>
                    })}
            </ul>
            {selectedMusic && <Music music={selectedMusic} />}
           
        </>
    )
}

export default MusicContainer