import s from './Loader.module.css'

export const Loader = () => (<div className={s.preloader}>
    	<svg className={s.loader}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
  <linearGradient id="gradient" y1="0" y2="1">
   <stop stop-color="#ffffff" offset="0"/>
   <stop stop-color="#512DE4" offset="1"/>
  </linearGradient>
 </defs>
		 <circle cx="50" cy="50" r="45" stroke="url(#gradient)"/>
	</svg>
</div>)
