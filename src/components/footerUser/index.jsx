import s from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <ul>
          <li>
            <a href="/condiciones-generales-venta">
              Condiciones Generales de Venta
            </a>
          </li>
          <li>
            <a href="/terminos-y-condiciones">Términos y Condiciones</a>
          </li>
          <li>
            <a href="/aviso-privacidad">Políticas de Privacidad</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">
              <svg className={s.btnLogo} />
            </a>
          </li>
          <li className={s.gray}>
            <a>Quienes somos</a>
          </li>
          <li>
            <a href="/login">Crea tu cuenta</a>
          </li>
        </ul>
        <div className={s.contact}>
          <div>
            <a href="https://www.instagram.com/alba.maternidad/">
              <svg className={s.instagram} />
            </a>
            <a href="https://www.linkedin.com/company/alba-maternidad/">
              <svg className={s.linkedin} />
            </a>
            <a href="https://www.facebook.com/alba.maternidad">
              <svg className={s.facebook} />
            </a>
          </div>
          <div>
            <a href="https://wa.me/5215539376827">
              <svg className={s.whatsapp} />
            </a>
            <a href="mailto:contacto@albamaternidad.com">
              <svg className={s.emailIcon} />
            </a>
            <a href="https://www.tiktok.com/@alba.maternidad?_d=secCgYIASAHKAESMgowWtXuro32fJ278%2BciA22IxkfELt51%2Fs9QX%2Fw2Irp4AVZfgNESDYjjhT9IwcvnwpOdGgA%3D&checksum=f4818e366059819f58ccd400134abedc76ef2ad1b80f882b3419f2b0b0de28a7&language=es&sec_uid=MS4wLjABAAAAm-qdU47ZGTBidM_actIviWLAmEBZbccPTeIwPM39A3hWoRszu6WbzPFVqN2U2gTQ&sec_user_id=MS4wLjABAAAAm-qdU47ZGTBidM_actIviWLAmEBZbccPTeIwPM39A3hWoRszu6WbzPFVqN2U2gTQ&share_app_id=1233&share_author_id=6966298810503283717&share_link_id=12C79A96-35E4-47EF-B906-D3CBC29E1AAD&tt_from=whatsapp&u_code=dik79617kmjm7k&user_id=6966298810503283717&utm_campaign=client_share&utm_medium=ios&utm_source=whatsapp&source=h5_m&_r=1">
              <svg className={s.tiktok} />
            </a>
          </div>
        </div>
      </div>
      <div className={s.phrase}>
        <h3>Todo para la maternidad</h3>
      </div>
    </div>
  );
};
export default Footer;
