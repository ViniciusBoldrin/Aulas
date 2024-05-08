export const GoogleIframe = () => {
  return (
    <div className="h-full w-full min-w-[300px] rounded border-2 border-otg-blue shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.543468946528!2d-56.04837992487363!3d-15.616022084999669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db10322743d35%3A0x86060229f73aecbf!2sVivans%20Complexo%20de%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1713457105937!5m2!1spt-BR!2sbr"
        height="100%"
        width="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
