export const getMetadata = (overrides?: {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}) => {
  return {
    metadataBase: new URL('https://eslegalmitrabajo.com'),
    title: overrides?.title || '¿Es Legal Mi Trabajo?',
    description: overrides?.description || 'Te explicamos tus derechos laborales en México. Aprende a identificar si tu trabajo es legal o no.',
    keywords: overrides?.keywords || 'derechos, laborales, mexico, salario, vacaciones, aguinaldo, horas extras, imss, infonavit, afore, prima, vacacional, vacaciones, incapacidad, maternidad, paternidad, despido, renuncia, liquidacion, finiquito, contrato, honorarios, asimilados, sueldo, salario, salario minimo, salario minimo diario, salario minimo mensual, salario minimo anual',
    url: overrides?.url || '/',
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: overrides?.url || '/',
      siteName: '¿Es Legal Mi Trabajo?',
      title: overrides?.title || '¿Es Legal Mi Trabajo?',
      description: overrides?.description || 'Te explicamos tus derechos laborales en México. Aprende a identificar si tu trabajo es legal o no.',
      images: [
        overrides?.image || {
          url: '/thumbnail.png',
          width: 1200,
          height: 627,
          alt: '¿Es Legal Mi Trabajo?',
        },
      ],
    },
  }
}
