import React from 'react';
import { Table } from 'reactstrap';

export default function UserSummaryTable () {

    return (
        <div>
            <h2>Immunization Record</h2>
            <Table>
                <thead>
                <tr>
                <th> </th>
                    <th>Vaccine</th>
                    <th>Date Given</th>
                    <th>Date Next Dose Due</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>POLIO</td>
                    <td>09/23/2019</td>
                    <td>09/23/2019</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td>DTP</td>
                    <td>09/23/2019</td>
                    <td>09/23/2019</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td>MEASLES</td>
                    <td>09/23/2019</td>
                    <td>09/23/2019</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
  }