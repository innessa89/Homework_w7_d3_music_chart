import React,{useRef} from "react";

const Music=({music,})=>{


    const audioRef = useRef();

    // const updateSong = (source) => {
    //     setSource(source);
    //     if(audioRef.current){
    //         audioRef.current.pause();
    //         audioRef.current.load();
    //         audioRef.current.play();
    //     }
    // }

    return(
        <>
            <h3>{music.title.label}</h3>

            <audio controls ref={audioRef}>
              <source src={music.link[1].attributes.href} type={music.link[1].attributes.type}/>
            </audio>
        </>
    )
}

export default Music;

