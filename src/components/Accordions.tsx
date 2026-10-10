import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export type AccordionProp = {
  summary: string;
  details: string;
};

function Accordions({ accordionProp }: { accordionProp: AccordionProp }) {
  const { t } = useTranslation();
  const id = React.useId();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-panel1-content`}
        id={`${id}-panel1-header`}
      >
        <Typography component="span">{t(accordionProp.summary)}</Typography>
      </AccordionSummary>
      <AccordionDetails>{accordionProp.details}</AccordionDetails>
    </Accordion>
  );
}

export default Accordions;