import { Accordion, AccordionTab } from 'primereact/accordion'

const Faq = () => {
  const alt = 'Mga Katanungan'
  return (
    <div className="card container">
      <h1>FAQ's</h1>
      <Accordion>
        <AccordionTab
          header={
            <div className="flex align-items-center">
              <span className="vertical-align-middle">
                Paano ako makikipag ugnayan sa ibang mga manlalaro sa laro?
              </span>
            </div>
          }
        >
          <p className="m-0">
            Ang mga manlalaro ay makikipagugnayan sa iba gamit ang mga
            emote,pakikipagchat at pagbuo ng mga grupo. Maaari mo rin hawakan
            ang kamay ng ibang mga manlalaro upang magbahagi ng liwanag at
            magnavigate sa mga challenging na lugar nang magkasama. -{' '}
            <i>ZR Sarmiento (SKY-PH: Admin)</i>
          </p>
        </AccordionTab>
        <AccordionTab
          header={
            <div className="flex align-items-center">
              <span className="vertical-align-middle">
                Ano ang gamit ng mga kandila sa laro?
              </span>
            </div>
          }
        >
          <p className="m-0">
            Ang mga kandila ay isang uri ng pera sa laro. Ang mga manlalaro ay
            maaaring mag-ipon ng mga kandila upang makabili ng mga kosmetiko,
            emote, at iba pang mga bagay na mag papaganda sa itsura at kakayahan
            ng kanilang karakter.- <i>ZR Sarmiento (SKY-PH: Admin)</i>
          </p>
        </AccordionTab>
        <AccordionTab
          header={
            <div className="flex align-items-center">
              <span className="vertical-align-middle">
                Ano ang layunin ng mga espiritu sa laro?
              </span>
            </div>
          }
        >
          <p className="m-0">
            Ang mga ispirito ay mga karakter na maaaring tulungan ng mga
            manlalaro at gabayan pabalik sa kanilang mga konstelasyon. Sa
            pamamagitan nito, kumikita ang mga manlalaro ng mga gantimpala,
            kosmetiko, at pagunlad sa kuwento ng laro.-{' '}
            <i>ZR Sarmiento (SKY-PH: Admin)</i>
          </p>
        </AccordionTab>
        <AccordionTab
          header={
            <div className="flex align-items-center">
              <span className="vertical-align-middle">
                Paano ako makakakuha ng mga pakpak sa “Sky: Children of the
                Light”?
              </span>
            </div>
          }
        >
          <p className="m-0">
            Ang mga pakpak o Wing Light (WL) ay makukuha sa pamamagitan ng
            paghanap ng mga WL sa buong laro. mga piraso ng liwanag na ito ay
            nakatago sa iba’t ibang mga lugar at maaaring kolektahin upang
            unti-unting mapabuti ang kakayahan ng iyong karakter na lumipad at
            mag-glide.- <i>ZR Sarmiento (SKY-PH: Admin)</i>
          </p>
        </AccordionTab>
        <AccordionTab
          header={
            <div className="flex align-items-center">
              <span className="vertical-align-middle">
                Available ba ang “Sky: Children of the Light” sa iba’t ibang
                platform?
              </span>
            </div>
          }
        >
          <p className="m-0">
            Yepp ang laro ay available sa iba’t ibang platform, nauna ito sa
            iOS, sumunod naman sa Android, at available na din sa Nintendo
            Switch, PlayStation, at ang bago ngayon sa PC. Maaaring gamitin ng
            mga manlalaro ang mapayapang laro at pagsasamang gameplay ng laro sa
            kanilang napiling platform.- <i>ZR Sarmiento (SKY-PH: Admin)</i>
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  )
}

export default Faq
