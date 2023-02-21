import { SearchOutlined } from "@ant-design/icons"
import { Button, Input, Space } from "antd"
import { useRef } from "react"

const ColumnSearchProps = (dataIndex) => {
	const searchInput = useRef(null)
	const handleSearch = (confirm) => {
		confirm()
	}
	const handleReset = (confirm, clearFilters) => {
		clearFilters()
		confirm({ closeDropdown: true })
	}

	return {
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div
				style={{
					padding: 8,
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					size="small"
					ref={searchInput}
					placeholder={`Escribe aquí...`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(confirm)}
					style={{
						marginBottom: 8,
						display: "block",
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(confirm)}
						icon={<SearchOutlined />}
						size="small"
					>
						Buscar
					</Button>
					<Button onClick={() => clearFilters && handleReset(confirm, clearFilters)} size="small">
						Resetear
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							close()
						}}
					>
						Cerrar
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? "#1890ff" : undefined,
				}}
			/>
		),
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100)
			}
		},
	}
}

export default ColumnSearchProps
