<?php

const FAKE_DB = [
    'jmartinbolet@gmail.com' => '63982e54a7aeb0d89910475ba6dbd3ca6dd4e5a1',
    'admin@admin.com' => '90b9aa7e25f80cf4f64e990b78a9fc5ebd6cecad',
    'toni@upc.com' => '63982e54a7aeb0d89910475ba6dbd3ca6dd4e5a1',
    'juan@upc.com' => '63982e54a7aeb0d89910475ba6dbd3ca6dd4e5a1',
    'ikram@upc.com' => '63982e54a7aeb0d89910475ba6dbd3ca6dd4e5a1'
];

const FAKE_USER_TABLE = [
    'jmartinbolet@gmail.com' => [
        'username' => 'josepmbolet',
        'name' => 'Josep',
        'lastname' => 'Martin',
        'age' => 33,
        'birthday' => '26/09/1990',
    ],
    'admin@admin.com' => [
        'username' => 'administrator',
        'name' => 'Admin',
        'lastname' => '',
        'age' => 33,
        'birthday' => '26/09/1990',
    ],
    'toni@upc.com' => [
        'username' => 'toniupc',
        'name' => 'Toni',
        'lastname' => 'Profe',
        'age' => 50,
        'birthday' => '26/09/1990',
    ],
    'juan@upc.com' => [
        'username' => 'juanupc',
        'name' => 'Juan',
        'lastname' => 'Profe',
        'age' => 50,
        'birthday' => '26/09/1990',
    ],
    'ikram@upc.com' => [
        'username' => 'ikramupc',
        'name' => 'Ikram',
        'lastname' => 'Profe',
        'age' => 50,
        'birthday' => '26/09/1990',
    ]
];

const USER_FRIENDS = [
    'jmartinbolet@gmail.com' => [
        [
            'name' => 'Pepito',
            'lastname' => 'Grillo',
            'email' => 'pepitogrillo@gmail.com',
            'image' => 'https://picsum.photos/id/1/50/50'
        ],
        [
            'name' => 'Pinotxo',
            'lastname' => 'Nas Llarg',
            'email' => 'pinotxo@gmail.com',
            'image' => 'https://picsum.photos/id/2/50/50'
        ],
        [
            'name' => 'Ikram',
            'lastname' => 'Profe',
            'email' => 'ikram@upc.com',
            'image' => 'https://picsum.photos/id/3/50/50'
        ],
        [
            'name' => 'Pepet',
            'lastname' => 'Marieta',
            'email' => 'pmarieta@gmail.com',
            'image' => 'https://picsum.photos/id/5/50/50'
        ]
    ],
    'admin@admin.com' => [
        [
            'name' => 'Juan',
            'lastname' => 'García',
            'email' => 'juan@upc.com',
            'image' => 'https://picsum.photos/id/6/50/50'
        ],
        [
            'name' => 'Josep',
            'lastname' => 'Martin',
            'email' => 'jmartinbolet@gmail.com',
            'image' => 'https://picsum.photos/id/7/50/50'
        ],
        [
            'name' => 'Joselito',
            'lastname' => 'Perez',
            'email' => 'joselito@gmail.com',
            'image' => 'https://picsum.photos/id/8/50/50'
        ],
        [
            'name' => 'Pep',
            'lastname' => 'Guardiola',
            'email' => 'pguardiola@gmail.com',
            'image' => 'https://picsum.photos/id/20/50/50'
        ],
    ],
    'toni@upc.com' => [
        [
            'name' => 'Juan',
            'lastname' => 'García',
            'email' => 'juan@upc.com',
            'image' => 'https://picsum.photos/id/6/50/50'
        ],
        [
            'name' => 'Josep',
            'lastname' => 'Martin',
            'email' => 'jmartinbolet@gmail.com',
            'image' => 'https://picsum.photos/id/7/50/50'
        ],
        [
            'name' => 'Ikram',
            'lastname' => 'Profe',
            'email' => 'ikram@upc.com',
            'image' => 'https://picsum.photos/id/3/50/50'
        ]
    ],
    'juan@upc.com' => [
        [
            'name' => 'Juanito',
            'lastname' => 'Pepito',
            'email' => 'juanito@gmail.com',
            'image' => 'https://picsum.photos/id/16/50/50'
        ],
        [
            'name' => 'Ikram',
            'lastname' => 'Profe',
            'email' => 'ikram@upc.com',
            'image' => 'https://picsum.photos/id/3/50/50'
        ],
        [
            'name' => 'Julián',
            'lastname' => 'Hernández',
            'email' => 'julian@gmail.com',
            'image' => 'https://picsum.photos/id/18/50/50'
        ],
        [
            'name' => 'Pep',
            'lastname' => 'Guardiola',
            'email' => 'pguardiola@gmail.com',
            'image' => 'https://picsum.photos/id/20/50/50'
        ],
        [
            'name' => 'Josep',
            'lastname' => 'Martin',
            'email' => 'jmartinbolet@gmail.com',
            'image' => 'https://picsum.photos/id/7/50/50'
        ]
    ],
    'ikram@upc.com' => [
        [
            'name' => 'Juan',
            'lastname' => 'García',
            'email' => 'juan@upc.com',
            'image' => 'https://picsum.photos/id/6/50/50'
        ],
        [
            'name' => 'Roger',
            'lastname' => 'Vidal',
            'email' => 'geppeto@gmail.com',
            'image' => 'https://picsum.photos/id/23/50/50'
        ],
        [
            'name' => 'Josep',
            'lastname' => 'Martin',
            'email' => 'jmartinbolet@gmail.com',
            'image' => 'https://picsum.photos/id/7/50/50'
        ],
        [
            'name' => 'Juanito',
            'lastname' => 'Pepito',
            'email' => 'juanito@gmail.com',
            'image' => 'https://picsum.photos/id/16/50/50'
        ],
        [
            'name' => 'Pep',
            'lastname' => 'Guardiola',
            'email' => 'pguardiola@gmail.com',
            'image' => 'https://picsum.photos/id/20/50/50'
        ],
    ],
];