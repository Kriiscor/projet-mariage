import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const Seo: React.FC<SEOProps> = ({
  title = 'Site de mariage de Coralie et Ralph',
  description = 'Site de mariage de Coralie et Ralph',
}) => {
  return (
    <Helmet>
      {/* Meta tags de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Seo;
