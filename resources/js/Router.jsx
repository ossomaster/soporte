import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Login = React.lazy(() => import("./pages/auth/PageLogin"))

const MainLayout = React.lazy(() => import("./layouts/MainLayout"))

const Incidencias = React.lazy(() => import("./pages/incidencias/PageIncidencias"))
const IncidenciasAdd = React.lazy(() => import("./pages/incidencias/PageIncidenciasAdd"))
const IncidenciasEdit = React.lazy(() => import("./pages/incidencias/PageIncidenciasEdit"))

const Students = React.lazy(() => import("./pages/students/PageStudents"))
const StudentsAdd = React.lazy(() => import("./pages/students/PageStudentsAdd"))
const StudentsEdit = React.lazy(() => import("./pages/students/PageStudentsEdit"))

const Jobs = React.lazy(() => import("./pages/jobs/PageJobs"))
const JobsAdd = React.lazy(() => import("./pages/jobs/PageJobsAdd"))
const JobsEdit = React.lazy(() => import("./pages/jobs/PageJobsEdit"))
const JobsApply = React.lazy(() => import("./pages/jobs/PageJobsApply"))

const Companies = React.lazy(() => import("./pages/companies/PageCompanies"))
const CompaniesAdd = React.lazy(() => import("./pages/companies/PageCompaniesAdd"))
const CompaniesEdit = React.lazy(() => import("./pages/companies/PageCompaniesEdit"))

const Users = React.lazy(() => import("./pages/users/PageUsers"))
const UsersAdd = React.lazy(() => import("./pages/users/PageUsersAdd"))
const UsersEdit = React.lazy(() => import("./pages/users/PageUsersEdit"))

const ReportsJobsPerDates = React.lazy(() => import("./pages/reports/PageReportsJobsPerDates"))
const ReportsStudentsPerJob = React.lazy(() => import("./pages/reports/PageReportsStudentsPerJob"))

const router = createBrowserRouter([
	{
		path: "/auth/login",
		element: (
			<React.Suspense fallback={null}>
				<Login />
			</React.Suspense>
		),
	},
	{
		path: "/",
		element: (
			<React.Suspense fallback={null}>
				<MainLayout />
			</React.Suspense>
		),
		children: [
			{
				path: "incidencias/",
				children: [
					{
						path: "",
						index: true,
						element: (
							<React.Suspense fallback={null}>
								<Incidencias />
							</React.Suspense>
						),
					},
					{
						path: "agregar",
						element: (
							<React.Suspense fallback={null}>
								<IncidenciasAdd />
							</React.Suspense>
						),
					},
					{
						path: ":id/editar",
						element: (
							<React.Suspense fallback={null}>
								<IncidenciasEdit />
							</React.Suspense>
						),
					},
				],
			},
			{
				path: "estudiantes/",
				children: [
					{
						path: "",
						index: true,
						element: (
							<React.Suspense fallback={null}>
								<Students />
							</React.Suspense>
						),
					},
					{
						path: "agregar",
						element: (
							<React.Suspense fallback={null}>
								<StudentsAdd />
							</React.Suspense>
						),
					},
					{
						path: ":id/editar",
						element: (
							<React.Suspense fallback={null}>
								<StudentsEdit />
							</React.Suspense>
						),
					},
				],
			},
			{
				path: "trabajos/",
				children: [
					{
						path: "",
						index: true,
						element: (
							<React.Suspense fallback={null}>
								<Jobs />
							</React.Suspense>
						),
					},
					{
						path: "agregar",
						element: (
							<React.Suspense fallback={null}>
								<JobsAdd />
							</React.Suspense>
						),
					},
					{
						path: ":id/aplicar",
						element: (
							<React.Suspense fallback={null}>
								<JobsApply />
							</React.Suspense>
						),
					},
					{
						path: ":id/editar",
						element: (
							<React.Suspense fallback={null}>
								<JobsEdit />
							</React.Suspense>
						),
					},
				],
			},
			{
				path: "empresas/",
				children: [
					{
						path: "",
						index: true,
						element: (
							<React.Suspense fallback={null}>
								<Companies />
							</React.Suspense>
						),
					},
					{
						path: "agregar",
						element: (
							<React.Suspense fallback={null}>
								<CompaniesAdd />
							</React.Suspense>
						),
					},
					{
						path: ":id/editar",
						element: (
							<React.Suspense fallback={null}>
								<CompaniesEdit />
							</React.Suspense>
						),
					},
				],
			},
			{
				path: "usuarios/",
				children: [
					{
						path: "",
						index: true,
						element: (
							<React.Suspense fallback={null}>
								<Users />
							</React.Suspense>
						),
					},
					{
						path: "agregar",
						element: (
							<React.Suspense fallback={null}>
								<UsersAdd />
							</React.Suspense>
						),
					},
					{
						path: ":id/editar",
						element: (
							<React.Suspense fallback={null}>
								<UsersEdit />
							</React.Suspense>
						),
					},
				],
			},
			{
				path: "reportes/",
				children: [
					{
						path: "trabajos-por-fechas",
						element: (
							<React.Suspense fallback={null}>
								<ReportsJobsPerDates />
							</React.Suspense>
						),
					},
					{
						path: "estudiantes-por-trabajo",
						element: (
							<React.Suspense fallback={null}>
								<ReportsStudentsPerJob />
							</React.Suspense>
						),
					},
				],
			},
		],
	},
])

export const MainRouter = () => {
	return <RouterProvider router={router} />
}
