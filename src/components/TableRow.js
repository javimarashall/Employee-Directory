const TableRow = ({data}) => {

    return (
        <tr key={data.login.uuid}>
            <td><img src={data.picture.medium} alt="employee pic"/></td>
            <td>{`${data.name.first} ${data.name.last}`}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.dob.date}</td>
        </tr>
    )
}

export default TableRow;