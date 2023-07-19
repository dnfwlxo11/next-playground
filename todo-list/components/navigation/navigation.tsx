import Label from '@/components/common/label'
import SvgIcon from '@/components/common/svg-icon'
import style from './navigation.module.scss'

export default function Header() {
	return (
		<div className={style.header}>
			<Label title={'안녕하세요.'} />
			<SvgIcon icon={{ src: '/icons/event_note.svg', color: 'rgba(241, 243, 245, 1)' }} />
			<SvgIcon icon={{ src: '/icons/arrow_back.svg', color: 'rgba(241, 243, 245, 1)' }} />
			<SvgIcon icon={{ src: '/icons/more_horiz.svg', color: 'rgba(241, 243, 245, 1)' }} />
		</div>
	)
}