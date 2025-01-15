export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      }
      heading: string;
      cta_button: {
        title: string;
        urll: string;
      }
      aboult: {
        description: string;
        banner: {
          url: string;
        }
      };
      sevices: ServiceProps[];
      contact: {
        emali: string;
        phone: string;
        address: string;
        time: string;
      }
    }
  }
}

interface ServiceProps {
  image: {
    url: string;
  }
  description: string;
}


