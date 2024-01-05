interface Icon {
	width?: string,
	height?: string,
	src?: string,
	color?: string,
}

export default function SvgIcon({ icon }: { icon: Icon }) {
	const iconStyle = {
		"display": "inline-block",
		"WebkitMaskRepeat": "no-repeat",
		"WebkitMaskPosition": "center",
		"overflow": "hidden",
		"WebkitMaskSize": "cover",
		"width": icon.width || '24px',
		"height": icon.height || '24px',
		"background": icon.color || 'rgba(0, 0, 0, 1)',
		"WebkitMaskImage": `url(${icon.src || "/vercel.svg"})`
	}

	return <span style={iconStyle}></span>
}