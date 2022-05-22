import { Chip } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import LoopIcon from '@mui/icons-material/Loop';
import DoneIcon from '@mui/icons-material/Done';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

type Status = 'PENDING' | 'PROGRESS' | 'DONE'

export function StatusChip({ row }: GridRenderCellParams) {
  const renderChip = () => {
    switch (row.state as Status) {
      case 'PENDING':
        return <Chip label='PENDING' icon={<HourglassBottomIcon />}/>
      case 'PROGRESS':
        return <Chip  label='PROGRESS' color='primary' icon={<LoopIcon />}/>
      case 'DONE':
        return <Chip label='DONE' color='success' icon={<DoneIcon />} />
    }

  }
  return renderChip()
}