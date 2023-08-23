import { Divider } from 'primereact/divider'
import reactlogo from './../../assets/images/react-logo.png'
import netlifylogo from './../../assets/images/netlify-logo.png'
import kenndevlogo from './../../assets/images/kenndev-logo.png'
import vitelogo from './../../assets/images/vitejs-logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <Divider align="center" />
      <p>
        Powered:&nbsp;
        <a href="https://react.dev/" title="ReactJS">
          <img src={reactlogo} alt="ReactJS" width={'20rem'} />
          &nbsp;
        </a>
        <a href="https://vitejs.dev/" title="ViteJS">
          <img src={vitelogo} alt="ViteJS" width={'20rem'} />
          &nbsp;
        </a>
        <a href="https://www.netlify.com/" title="Netlify">
          <img src={netlifylogo} alt="Netlify logo" width={'20rem'} />
          &nbsp;
        </a>
        Built:&nbsp;
        <a href="https://www.facebook.com/KennMDev/">
          <img src={kenndevlogo} alt="kenndev-logo" width={'20rem'} />
          &nbsp;KennDev&nbsp; &copy;{currentYear}
        </a>
      </p>
    </footer>
  )
}

export default Footer
