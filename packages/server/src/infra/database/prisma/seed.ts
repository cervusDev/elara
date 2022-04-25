import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.permission.create({
    data: {
      create: 'S',
      read: 'S',
      update: 'S',
      delete: 'S',
    },
  });

  await prisma.role.create({
    data: {
      description: 'Site Administrator',
      name: 'admin',
      PermissionsRoles: {
        create: {
          permissionId: admin.id,
        },
      },
    },
  });

  const supervisor = await prisma.permission.create({
    data: {
      create: 'S',
      read: 'S',
      update: 'S',
      delete: 'S',
    },
  });

  await prisma.role.create({
    data: {
      description: 'Site Supervisor',
      name: 'master',
      PermissionsRoles: {
        create: {
          permissionId: supervisor.id,
        },
      },
    },
  });

  const user = await prisma.permission.create({
    data: {
      create: 'N',
      read: 'S',
      update: 'N',
      delete: 'N',
    },
  });

  await prisma.role.create({
    data: {
      description: 'Site User',
      name: 'user',
      PermissionsRoles: {
        create: {
          permissionId: user.id,
        },
      },
    },
  });
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
