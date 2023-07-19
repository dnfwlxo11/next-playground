interface Icon {
	width?: string,
	height?: string,
	src?: string,
	color?: string,
}

export default function SvgIcon({ icon }: { icon: Icon }) {
	const iconStyle = {
		"display": "inline-block",
		"mask-repeat": "no-repeat",
		"mask-position": "center",
		"-webkit-mask-repeat": "no-repeat",
		"-webkit-mask-position": "center",
		"overflow": "hidden",
		"mask-size": "cover",
		"width": icon.width || '24px',
		"height": icon.height || '24px',
		"background": icon.color || 'rgba(0, 0, 0, 1)',
		"mask-image": `url(${icon.src})`,
		"-webkit-mask-image": `url(${icon.src})`
	}

	return <div>
		<span style={iconStyle}></span>
	</div>
}