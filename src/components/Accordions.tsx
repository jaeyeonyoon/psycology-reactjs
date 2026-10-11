import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { type AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
  type AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, type ReactElement, type SyntheticEvent } from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

export type AccordionProp = {
  id: number;
  summary: string;
  details: ReactElement;
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

function Accordions({ accordionProp }: { accordionProp: AccordionProp }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      console.log(`panel ${panel}`);
      console.log(`expanded ${expanded}`);
      console.log(`new expanded ${newExpanded}`);
      // TODO: Open panels don't close when you open another panel for some reason
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === `panel${accordionProp.id}`}
      onChange={handleChange(`panel${accordionProp.id}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${accordionProp.id}-panel1-content`}
        id={`panel${accordionProp.id}d-header`}
      >
        <Typography component="span">{t(accordionProp.summary)}</Typography>
      </AccordionSummary>
      <AccordionDetails>{accordionProp.details}</AccordionDetails>
    </Accordion>
  );
}

export default Accordions;
