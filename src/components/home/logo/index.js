import './index.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import logoS from './../../../assets/images/top4.png'

const Logo =  () => {
    const bgRef = useRef()
     const outlineLogoRef = useRef()
     const solidLogoRef = useRef()
    return (
        <div className="logo-container">
            <img className="solid-logo"  src={logoS} alt="c"/>
            
           
        </div>
    )
}

export default Logo 