import React, {useRef, useState} from 'react';
import useClickOutside from '@/app/hooks/useClickOutside';
import {DropdownButton, DropdownContent, DropdownWrap} from '@/app/components/Dropdown/styles';

const Dropdown = ({title = '', active = '', values = [], handleSelect}) => {
	const [open, setOpen] = useState(false)
	const ref = useRef(null)

	const handleToggle = () => setOpen(prev => !prev)

	const handleClose = () => setOpen(false)

	const privateHandleSelect = (e, item) => {
		e.preventDefault()
		handleSelect(item)
		handleClose()
	}

	useClickOutside(ref, handleClose)

	return (
		<DropdownWrap>
			<DropdownButton onClick={handleToggle}>
				{title}: <span>
					{
						Array.isArray(active) ?
							active.reduce((acc, curr) => `${acc} ${curr.name}`, '') :
							active.name
					}
				</span>
			</DropdownButton>

			{
				open ?
					<DropdownContent ref={ref}>
						<ul>
							{
								values.map(item => (
									<li key={item.value}>
										<span
											className={`${active.value === item.value || Array.isArray(active) && active.find(activeItem => activeItem.value === item.value) ? 'active' : ''} ${item.value === '' ? 'clear' : ''}`}
											onClick={(e) => privateHandleSelect(e, item)}>
											{item.name}
										</span>
									</li>
								))
							}
						</ul>
					</DropdownContent> :
					undefined
			}
		</DropdownWrap>
	);
};

export default Dropdown;