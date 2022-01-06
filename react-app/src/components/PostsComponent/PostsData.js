const PostsData = [
    {
        "id": 1,
        "title": "Lorem ipsum dolor sit amet",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare dui leo, eu tempor felis porttitor pellentesque. Vestibulum eu nulla non nibh iaculis sagittis. Phasellus varius risus eget sapien semper finibus. Mauris nunc augue, rutrum vitae nisl vel, ullamcorper scelerisque dui. Suspendisse eu nulla eleifend tellus tristique volutpat. Nulla sed elit leo. Duis neque est, cursus vitae magna non, rutrum molestie eros. Sed eget ex et est feugiat bibendum eget quis magna. Quisque id euismod ligula, eu feugiat eros."
    },
    {
        "id": 2,
        "title": "Praesent ut dolor urna",
        "content": "Praesent ut dolor urna. Sed non lorem consectetur mauris finibus facilisis sed vitae nisi. Fusce eget mi nec erat commodo convallis eget quis sem. Nulla dolor nulla, mattis non mollis ac, mattis non lectus. Sed blandit elit a vehicula convallis. Sed eleifend pellentesque sem, quis sodales dui fringilla et. Proin condimentum elementum turpis, ut vehicula elit consectetur sit amet. Phasellus dictum congue blandit. Proin porttitor non dui nec varius. Cras in lacinia est. Nam pulvinar nisi quis purus hendrerit, non tempor leo mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    {
        "id": 3,
        "title": "Vivamus in placerat justo",
        "content": "Vivamus in placerat justo. Pellentesque quis lorem malesuada, posuere dui aliquam, dignissim diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a mollis arcu, in auctor magna. Maecenas non nunc ac diam ullamcorper tristique. Pellentesque dapibus interdum nisl sed luctus. Sed venenatis purus sit amet nisl ornare ornare. Duis tristique sollicitudin hendrerit. Vivamus ullamcorper sem in fermentum pulvinar. Sed mollis sit amet erat vitae suscipit. Duis pharetra, ante lacinia consectetur malesuada, massa elit feugiat metus, in sagittis diam nisi et nisl. In et justo mi. Nam gravida aliquam convallis. Mauris vehicula ante a suscipit ornare. Vestibulum ac fringilla lorem."
    },
    {
        "id": 4,
        "title": "Integer at enim efficitur",
        "content": "Integer at enim efficitur, fermentum velit ut, commodo ante. Vestibulum ornare purus sed aliquam sagittis. Curabitur sed ante vel libero rhoncus gravida quis eget ante. Duis nec nisi eleifend, laoreet dolor eget, sollicitudin odio. Vestibulum risus libero, elementum nec leo et, cursus pharetra nulla. Etiam sit amet massa luctus, accumsan mauris sit amet, cursus sem. Etiam ultrices pretium arcu, nec auctor turpis efficitur eget. Suspendisse ullamcorper elit ac risus congue, vel eleifend lacus iaculis."
    },
    {
        "id": 5,
        "title": "Integer neque elit",
        "content": "Integer neque elit, semper et leo id, aliquet iaculis augue. Sed pretium lorem et volutpat convallis. Pellentesque consequat iaculis erat non vulputate. Maecenas mollis augue consectetur, aliquet turpis quis, placerat libero. Donec pellentesque cursus tellus, eget pulvinar mauris dictum vitae. Ut porta commodo dignissim. Suspendisse potenti. Integer in hendrerit metus. Duis nec vestibulum mauris, nec dapibus sapien. Ut sed magna sit amet justo suscipit varius eget eu felis. In nec sapien sapien. Sed condimentum ultricies dolor at sollicitudin."
    }
]

export function getPosts() {
    return PostsData;
}

export function getPost(id) {
    return PostsData.find(post => post.id === id);
}
