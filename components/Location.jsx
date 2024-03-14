export const Location = () => {
  const direcciones = [
    {
      nombre: "CENTRO DE SERVICIO VENTA LTH VICENTE GUERRERO:",
      direccion: "Av. Vicente Guerrero 100, Zona 1, Tezontepec, 62450, Cuernavaca, Mor.",
      url: "https://maps.app.goo.gl/uBnyqJQYzVUvwCa48",
    },
    {
      nombre: "CENTRO DE SERVICIO LTH PLAN DE AYALA:",
      direccion: "Av. Plan de Ayala 353, Amatitlán, 62410, Cuernavaca, Mor.",
      url: "https://maps.app.goo.gl/d8QVu7eHMzJRUpb49",
    },
    {
      nombre: "CENTRO DE VENTA ATLACOMULCO:",
      direccion: "Av. Atlacomulco 99, Chapultepec, 62450, Cuernavaca, Mor.",
      url: "https://maps.app.goo.gl/5emjNV51reEDpAKv7",
    },
  ];

  return (
    <div className="lg:mt-10">
      {direcciones.map((direccion) => (
        <div className="mb-5 flex lg:w-[700px] lg:mx-auto">
          <a href={direccion.url} target="_blank" rel="noreferrer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.31 5.04C18.9096 3.63923 17.018 2.84006 15.0375 2.8125H14.9625C12.9818 2.83966 11.0899 3.63856 9.68923 5.03924C8.28855 6.43992 7.48965 8.33183 7.46249 10.3125C7.43811 11.7188 7.83374 13.1006 8.59874 14.2819L14.5012 26.25H15.5006L21.4012 14.2819C22.1681 13.1006 22.5637 11.7188 22.5375 10.3125C22.5099 8.33199 21.7108 6.44037 20.31 5.04ZM14.8594 4.6875L15.0131 4.70625L15.1519 4.6875C16.6248 4.75165 18.0172 5.37762 19.0428 6.43674C20.0685 7.49586 20.6494 8.90764 20.6662 10.3819C20.6806 11.4282 20.3751 12.4539 19.7906 13.3219L19.7531 13.3856L19.7212 13.4513L15 23.0231L10.2806 13.4606L10.2487 13.3875L10.2112 13.3237C9.62677 12.4558 9.32127 11.4301 9.33561 10.3837C9.3516 8.90781 9.93322 7.49424 10.9606 6.43444C11.988 5.37463 13.3828 4.74935 14.8575 4.6875H14.8594ZM16.0069 8.75438C15.8021 8.61747 15.5724 8.52224 15.3309 8.4741C15.0893 8.42597 14.8407 8.42589 14.5991 8.47385C14.3575 8.52182 14.1278 8.6169 13.9229 8.75367C13.7181 8.89043 13.5422 9.0662 13.4053 9.27094C13.2684 9.47568 13.1732 9.70538 13.125 9.94692C13.0769 10.1885 13.0768 10.4371 13.1248 10.6787C13.1727 10.9203 13.2678 11.15 13.4046 11.3549C13.5414 11.5597 13.7171 11.7356 13.9219 11.8725C14.3354 12.149 14.8417 12.2499 15.3296 12.153C15.8175 12.0561 16.2469 11.7694 16.5234 11.3559C16.7999 10.9424 16.9008 10.4361 16.8039 9.94817C16.7071 9.46029 16.4204 9.03086 16.0069 8.75438ZM12.8812 7.19438C13.2903 6.90679 13.7528 6.70394 14.2415 6.59776C14.7302 6.49157 15.2352 6.4842 15.7267 6.57607C16.2183 6.66795 16.6865 6.85721 17.1039 7.13273C17.5212 7.40825 17.8792 7.76445 18.1568 8.18039C18.4344 8.59632 18.6261 9.06358 18.7204 9.55468C18.8148 10.0458 18.81 10.5508 18.7062 11.04C18.6025 11.5292 18.402 11.9927 18.1165 12.4033C17.831 12.8138 17.4663 13.1631 17.0437 13.4306C16.2167 13.9543 15.2177 14.1337 14.26 13.9307C13.3024 13.7277 12.4622 13.1583 11.9187 12.3441C11.3753 11.5299 11.1718 10.5355 11.3516 9.57329C11.5315 8.61107 12.0804 7.75731 12.8812 7.19438Z"
                fill="#D3172E"
              />
            </svg>
          </a>
          <div>
            <h2 className="text-lg font-medium lg:text-2xl">
              {direccion.nombre}
            </h2>
            <p className="text-lg font-light lg:mb-5 lg:text-xl">
              {direccion.direccion}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
