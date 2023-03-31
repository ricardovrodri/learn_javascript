<script>
    import { Button, Modal, Table  } from 'sveltestrap';
    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>
  
  <Button color="primary" on:click={toggle}>Hello World!</Button>
  <Modal body {isOpen} {toggle} header="Hello World!">
    <p>There's a song that we're singing. Come on</p>
    <img
      src="https://i.ytimg.com/vi/NUJIRujygvY/hqdefault.jpg"
      alt="Come on Get Happy"
      class="img-fluid"
    />
  </Modal>

  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>